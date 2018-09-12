import PropTypes from 'prop-types';
import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import {
  EditorState,
  convertToRaw,
  convertFromRaw,
  KeyBindingUtil,
  Modifier,
  AtomicBlockUtils,
} from 'draft-js';
import {
  Editor,
  StringToTypeMap,
  Block,
  keyBindingFn,
  createEditorState,
  addNewBlockAt,
  beforeInput,
  getCurrentBlock,
  ImageSideButton,
  rendererFn,
  HANDLED,
  NOT_HANDLED
} from 'medium-draft';
import {
  setRenderOptions,
  blockToHTML,
  entityToHTML,
  styleToHTML,
} from 'medium-draft/dist/medium-draft-exporter';
import 'medium-draft/dist/medium-draft.css'
import 'medium-draft/lib/index.css'

const __PROD__ = false;

const newTypeMap = StringToTypeMap;
newTypeMap['2.'] = Block.OL;

const { hasCommandModifier } = KeyBindingUtil;

const DQUOTE_START = '“';
const DQUOTE_END = '”';
const SQUOTE_START = '‘';
const SQUOTE_END = '’';

const newBlockToHTML = (block) => {
  const blockType = block.type;
  if (block.type === Block.ATOMIC) {
    if (block.text === 'E') {
      return {
        start: '<figure className="md-block-atomic md-block-atomic-embed">',
        end: '</figure>'
      };
    } else if (block.text === '-') {
      return <div className="md-block-atomic md-block-atomic-break"><hr/></div>;
    } else if (block.text === 'Y') {
      console.log(block);
      return {
        start: '<div className="md-block-atomic md-block-atomic-embed">',
        end: '</div>'
      };
    }
  }
  return blockToHTML(block);
};

const newEntityToHTML = (entity, originalText) => {
  console.log(entity);
  if (entity.type === 'embed') {
    return (
      <div>
        <a
          className="embedly-card"
          href={entity.data.url}
          data-card-controls="0"
          data-card-theme="dark"
        > ― {entity.data.url}
        </a>
      </div>
    );
  } else if (entity.type === 'youtube') {

    return (
      <div>
        <a
          className="embedly-card"
          href={entity.data.url}
          data-card-controls="0"
          data-card-theme="dark"
        >Embedded ― {entity.data.url}
        </a>
      </div>
    );
  }
  return entityToHTML(entity, originalText);
};

const handleBeforeInput = (editorState, str, onChange) => {
  if (str === '"' || str === '\'') {
    const currentBlock = getCurrentBlock(editorState);
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const text = currentBlock.getText();
    const len = text.length;
    if (selectionState.getAnchorOffset() === 0) {
      onChange(EditorState.push(editorState, Modifier.insertText(contentState, selectionState, (str === '"' ? DQUOTE_START : SQUOTE_START)), 'transpose-characters'));
      return HANDLED;
    } else if (len > 0) {
      const lastChar = text[len - 1];
      if (lastChar !== ' ') {
        onChange(EditorState.push(editorState, Modifier.insertText(contentState, selectionState, (str === '"' ? DQUOTE_END : SQUOTE_END)), 'transpose-characters'));
      } else {
        onChange(EditorState.push(editorState, Modifier.insertText(contentState, selectionState, (str === '"' ? DQUOTE_START : SQUOTE_START)), 'transpose-characters'));
      }
      return HANDLED;
    }
  }
  return beforeInput(editorState, str, onChange, newTypeMap);
};


class SeparatorSideButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let editorState = this.props.getEditorState();
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity('separator', 'IMMUTABLE', {});
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    editorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
    this.props.setEditorState(
      AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        '-'
      )
    );
    this.props.close();
  }

  render() {
    return (
      <button
        className="md-sb-button md-sb-img-button"
        type="button"
        title="Add a separator"
        onClick={this.onClick}
      >
        <i className="fa fa-minus" />
      </button>
    );
  }
}


class EmbedSideButton extends React.Component {

  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.addEmbedURL = this.addEmbedURL.bind(this);
  }

  onClick() {
    const url = window.prompt('Enter a URL', 'https://www.youtube.com/watch?v=PMNFaAUs2mo');
    this.props.close();
    if (!url) {
      return;
    }
    this.addEmbedURL(url);
  }

  addEmbedURL(url) {
    let editorState = this.props.getEditorState();
    const content = editorState.getCurrentContent();

    const selection = editorState.getSelection();

    /* Get the current block */
    const currentBlock = editorState.getCurrentContent()
      .getBlockForKey(selection.getStartKey());
    const contentWithEntity = content.createEntity('embed', 'IMMUTABLE', {url});
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    editorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
    this.props.setEditorState(
      AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        'E'
      )
    );
  }

  render() {
    return (
      <button
        className="md-sb-button md-sb-img-button"
        type="button"
        title="Add an Embed"
        onClick={this.onClick}
      >
        <i className="fa fa-code" />
      </button>
    );
  }
}

class YoutubeEmbedSideButton extends React.Component {

  static propTypes = {
    setEditorState: PropTypes.func,
    getEditorState: PropTypes.func,
    close: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.embedYoutubeURL = this.embedYoutubeURL.bind(this);
  }

  onClick() {
    this.props.close();
    this.embedYoutubeURL();
  }

  embedYoutubeURL() {
    let editorState = this.props.getEditorState();
    const currentBlock = getCurrentBlock(editorState);
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const url = currentBlock.getText();
    const len = url.length;
    /*console.log(text);*/
      if (len > 11 && getYouTubeID(url).length === 11)
      {
          const matchArr = utubeRegex.exec(url);
          if (matchArr !== null) {
              const contentWithEntity = contentState.createEntity('youtube', 'IMMUTABLE', {url});
              const entityKey = contentWithEntity.getLastCreatedEntityKey();
              const newEditorState = EditorState.set(
                editorState,
                {currentContent: contentWithEntity}
              );
              editorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
              this.setState({ 
                editorState :AtomicBlockUtils.insertAtomicBlock(
                  newEditorState,
                  entityKey,
                  'Y'
                ) 
              });
          }
      }
  }

  render() {
    return (
      <button
        className="md-sb-button md-sb-img-button"
        type="button"
        title="Add an Embed"
        onClick={this.onClick}
      >
        <i className="fa fa-play-circle" />
      </button>
    );
  }
}

const utubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;

function getYouTubeID(url) {
    let result = '';
    if (url) {
        const match = url.match(utubeRegex);
        if (match && match[7] && match[7].length === 11) result = match[7];
    }
    return result;
}


class AtomicEmbedComponent extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showIframe: false,
    };

    this.enablePreview = this.enablePreview.bind(this);
  }

  componentDidMount() {
    this.renderEmbedly();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.showIframe !== this.state.showIframe && this.state.showIframe === true) {
      this.renderEmbedly();
    }
  }

  getScript() {
    const script = document.createElement('script');
    script.async = 1;
    script.src = '//cdn.embedly.com/widgets/platform.js';
    script.onload = () => {
      window.embedly();
    };
    document.body.appendChild(script);
  }

  renderEmbedly() {
    if (window.embedly) {
      window.embedly();
    } else {
      this.getScript();
    }
  }

  enablePreview() {
    this.setState({
      showIframe: true,
    });
  }

  render() {
    const { url } = this.props.data;
    const innerHTML = `<div><a className="embedly-card" href="${url}" data-card-controls="0" data-card-theme="dark">Embedded ― ${url}</a></div>`;
    return (
      <div className="md-block-atomic-embed">
        <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      </div>
    );
  }
}

class AtomicYoutubeComponent extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showIframe: false,
    };

  }

  render() {
    console.log(this.props);
    const { url } = this.props.data;
    const id = getYouTubeID(url);
    const innerHTML = `<div><a href="${url}" data-card-controls="0" data-card-theme="dark">Embedding in process</a></div>`;
    return (
        <div className="videowrapper">
            <iframe id={`yt-${id}`}
                    src={`https://www.youtube.com/embed/${id}?autoplay=0`}
                    type='text/html' frameBorder='0'
            />
            <span> </span>
        </div>
    );
  }
}

const AtomicSeparatorComponent = (props) => (
  <hr />
);

const AtomicBlock = (props) => {
  const { blockProps, block } = props;
  const content = blockProps.getEditorState().getCurrentContent();
  const entity = content.getEntity(block.getEntityAt(0));
  const data = entity.getData();
  const type = entity.getType();
  if (blockProps.components[type]) {
    const AtComponent = blockProps.components[type];
    return (
      <div className={`md-block-atomic-wrapper md-block-atomic-wrapper-${type}`}>
        <AtComponent data={data} />
      </div>
    );
  }
  return <p>Block of type <b>{type}</b> is not supported.</p>;
};

const Video = (props) => {
  const entity = props.contentState.getEntity(
    props.block.getEntityAt(0)
  );
  const {url} = entity.getData();
    const id = getYouTubeID(url);
    return (
        <div className="videowrapper">
            <iframe id={`yt-${id}`}
                    src={`https://www.youtube.com/embed/${id}?autoplay=0`}
                    type='text/html' frameBorder='0'
            />
            <span> </span>
        </div>
    );
};


class MediaEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(),
      editorEnabled: true,
      placeholder: 'Write here...',
    };

    this.onChange = (editorState, callback = null) => {
      if (this.state.editorEnabled) {
        this.setState({ editorState }, () => {
          if (callback) {
            callback();
          }
        });
      }
    };

    this.sideButtons = [{
      title: 'Image',
      component: ImageSideButton,
    }, {
      title: 'YoutubeEmbed',
      component: YoutubeEmbedSideButton,
    }, {
      title: 'Separator',
      component: SeparatorSideButton,
    }];

    this.exporter = setRenderOptions({
      styleToHTML,
      blockToHTML: newBlockToHTML,
      entityToHTML: newEntityToHTML,
    });

    this.getEditorState = () => this.state.editorState;

    this.logData = this.logData.bind(this);
    this.renderHTML = this.renderHTML.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
/*    this.embedYoutubeURL = this.embedYoutubeURL.bind(this);
*/   /* this.fetchData = this.fetchData.bind(this);*/
    this.loadSavedData = this.loadSavedData.bind(this);
    this.keyBinding = this.keyBinding.bind(this);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
    this.handleDroppedFiles = this.handleDroppedFiles.bind(this);
    this.handlePastedText = this.handlePastedText.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

 /* componentDidMount() {
    setTimeout(this.fetchData, 1000);
  }*/

  rendererFn(setEditorState, getEditorState) {
    const atomicRenderers = {
      embed: AtomicEmbedComponent,
      youtube: AtomicYoutubeComponent,
      separator: AtomicSeparatorComponent,
    };
    const rFnOld = rendererFn(setEditorState, getEditorState);
    const rFnNew = (contentBlock) => {
      const type = contentBlock.getType();
      switch(type) {
        case Block.ATOMIC:
          return {
            component: AtomicBlock,
            editable: false,
            props: {
              components: atomicRenderers,
              getEditorState,
            },
          };
        default: return rFnOld(contentBlock);
      }
    };
    return rFnNew;
  }

  keyBinding(e) {
    if (hasCommandModifier(e)) {
      if (e.which === 83) {  /* Key S */
        return 'editor-save';
      }
      // else if (e.which === 74 /* Key J */) {
      //  return 'do-nothing';
      //}
    }
    if (e.altKey === true) {
      if (e.shiftKey === true) {
        switch (e.which) {
          /* Alt + Shift + L */
          case 76: return 'load-saved-data';
          /* Key E */
          // case 69: return 'toggle-edit-mode';
        }
      }
      if (e.which === 72 /* Key H */) {
        return 'toggleinline:HIGHLIGHT';
      }
    }
    return keyBindingFn(e);
  }

  handleKeyCommand(command) {
    if (command === 'editor-save') {
      window.localStorage['editor'] = JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent()));
      return true;
    } else if (command === 'load-saved-data') {
      this.loadSavedData();
      return true;
    } else if (command === 'toggle-edit-mode') {
      this.toggleEdit();
    } else if (command === 'enter-press') {
      this.embedYoutubeURL();
      return false;
    }
    return false;
  }


  logData(e) {
    const currentContent = this.state.editorState.getCurrentContent();
    const es = convertToRaw(currentContent);
    console.log(es);
    console.log(this.state.editorState.getSelection().toJS());
  }

  renderHTML(e) {
    const currentContent = this.state.editorState.getCurrentContent();
    const eHTML = this.exporter(currentContent);
    var newWin = window.open(
      `${window.location.pathname}rendered.html`,
      'windowName',`height=${window.screen.height},width=${window.screen.wdith}`);
    newWin.onload = () => newWin.postMessage(eHTML, window.location.origin);
  }

  loadSavedData() {
    const data = window.localStorage.getItem('editor');
    if (data === null) {
      return;
    }
    try {
      const blockData = JSON.parse(data);
      console.log(blockData);
      this.onChange( EditorState.push(this.state.editorState, convertFromRaw(blockData)), this._editor.focus);
    } catch(e) {
      console.log(e);
    }
  }

  toggleEdit(e) {
    this.setState({
      editorEnabled: !this.state.editorEnabled
    });
  }

  handleDroppedFiles(selection, files) {
    const file = files[0];
    if (file.type.indexOf('image/') === 0) {
      // eslint-disable-next-line no-undef
      const src = URL.createObjectURL(file);
      this.onChange(addNewBlockAt(
        this.state.editorState,
        selection.getAnchorKey(),
        Block.IMAGE, {
          src,
        }
      ));
      return HANDLED;
    }
    return NOT_HANDLED
  } 
  handlePastedText(text, html,editorState) {
    const currentBlock = getCurrentBlock(editorState);
    const selectionState = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const url = text;
    const len = url.length;
    console.log(url);
    /*console.log(text);*/
      if (len > 11 && getYouTubeID(url).length === 11)
      {

          const matchArr = utubeRegex.exec(url);
          if (matchArr !== null) {
              const contentWithEntity = contentState.createEntity('youtube', 'IMMUTABLE', {url});
              const entityKey = contentWithEntity.getLastCreatedEntityKey();
              const newEditorState = EditorState.set(
                editorState,
                {currentContent: contentWithEntity}
              );
              editorState = EditorState.push(editorState, contentWithEntity, 'create-entity');
              this.setState({ 
                editorState :AtomicBlockUtils.insertAtomicBlock(
                  newEditorState,
                  entityKey,
                  'Y'
                ) 
              });
              return HANDLED;
          }
      }
    return NOT_HANDLED
  }

  handleReturn(e) {
    // const currentBlock = getCurrentBlock(this.state.editorState);
    // var text = currentBlock.getText();
    return NOT_HANDLED;
  }

  render() {
    const { editorState, editorEnabled } = this.state;
    return (
      <div>
        <Editor
          ref={(e) => {this._editor = e;}}
          editorState={editorState}
          onChange={this.onChange}
          editorEnabled={editorEnabled}
          handleDroppedFiles={this.handleDroppedFiles}
          handlePastedText={this.handlePastedText}
          handleKeyCommand={this.handleKeyCommand}
          placeholder={this.state.placeholder}
          keyBindingFn={this.keyBinding}
          beforeInput={handleBeforeInput}
          handleReturn={this.handleReturn}
          sideButtons={this.sideButtons}
          rendererFn={this.rendererFn}
        />
      </div>
    );
  }
}

if (!__PROD__) {
  window.ga = function() {
    console.log(arguments);
  };
}

class WriteStoryCon extends React.Component {
  constructor(props) {
    super(props);

    this.toggleInlineTooltip = this.toggleInlineTooltip.bind(this);

    this.state = {
      tooltipOpenClass: ""
    };
  }

  toggleInlineTooltip(e) {
    e.preventDefault();
    this.setState({
      tooltipOpenClass: !this.state.tooltipOpenClass.length ? "open": ""
    });
  }
  render() {
    return (
      <Container fluid className="mt-4 write-story-container">
          <Row>
            <Col xs="12" md={{ size: 7 }} className="mx-auto">
              <div className="d-flex align-items-center px-4">
                  <div>
                    <img
                      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                      className="rounded-circle"
                      alt="My Name"
                    />
                  </div>
                  <div className="ml-2">
                    <div className="profile">
                      <a 
                        className="text-secondary"
                        href="#"
                      >
                        My name
                      </a>
                      <div><small className="text-muted">Draft</small></div>
                    </div>
                  </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="12" md={{ size: 7 }} className="mx-auto mt-4 pos-rel">
              <div className="mb-2">
                <MediaEditor />
              </div>              
            </Col>
          </Row>
      </Container>
    );
  }
}

export default WriteStoryCon;
