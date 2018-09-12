import React from "react";
import {Container, Row, Col, Button, Media} from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class PostComments extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);           
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.state = {
      popoverOpen: false,
      isEditorShow: false
    };
  }
  handleClick(){
    this.setState({
      isEditorShow: true
    });
    // this.nameEditor.focus();
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
  setWrapperRef(node) {
      this.wrapperRef = node;
  }
  handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.isEditorShow) {
          this.setState({
            isEditorShow: false
          });
      }
  }
  render() {
    return (
      <div className="p-0 clearfix lightGrayBg">
        <Container>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
              <Row>
                <Col>
                  <h6 className="text-secondary">Responses</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="whiteBgBlock mb-4 px-4 ">
                    <div>
                      <div>
                        <div ref={this.setWrapperRef}  className="p-3">
                          <div className="d-flex align-items-center">
                            <div>
                              <div>
                                <img
                                  src="https://cdn-images-1.medium.com/fit/c/36/36/0*Eba8Tvm2TbdNgizF."
                                  className="rounded-circle"
                                  alt="Ceddy Muhoza"
                                />
                              </div>
                            </div>
                            <div className="ml-2">
                              <div onClick={this.handleClick} className={this.state.isEditorShow ? 'd-none': ''}>
                                Write a response…
                              </div> 
                              <div className={this.state.isEditorShow ? '': 'd-none'}>
                                <a 
                                  className="text-primary"
                                  href="#"
                                >
                                  Ceddy Muhoza
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className={this.state.isEditorShow ? 'commentEditor ': 'commentEditor d-none'}>
                            <textarea autoFocus className="mt-2 commentEditorArea border-0 form-control" type="text" rows="6"></textarea>
                            <Button outline color="primary" className="mx-2">publish</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-4">
                  <div className="minDivider" />
                  <ul className="list-inline">
                    <li className="list-inline-item text-muted">Conversation between </li>
                    <li className="list-inline-item"><a className="text-primary" href="#">Abc</a></li>
                    <li className="list-inline-item text-muted"> and </li>
                    <li className="list-inline-item"><a className="text-primary" href="#">Xyz</a></li>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col className="mt-4">
                  <div className="whiteBgBlock">
                    <Row>
                      <Col>
                      <div className="p-4">
                        <div className="d-flex flex-row">
                          <div className="p-2">
                            <img
                                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                                className="img-fluid rounded-circle"
                                alt="Go to the profile"
                              />
                          </div>
                          <div className="p-2">
                            <h6 className="font-weight-normal"><a className="text-primary" href="#">Abc</a></h6>
                            <small>  Mar 23, 2017</small>
                          </div>
                        </div>
                        <div className="d-flex">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</div>
                        <div className="pl-2 d-flex">
                          <div className="p-1">                   
                            <a 
                              className="text-primary"
                              href="#"
                            >
                              <span className="mr-1">
                                <i className="far fa-thumbs-up"></i>
                              </span>
                            </a>
                            <small>
                              1
                            </small>
                          </div>
                          <div className="p-1 ml-auto">
                            <a 
                              className="text-secondary"
                              href="#"
                            >
                              <span className="mr-3">
                                1 response
                              </span>
                            </a>
                            <a 
                              className="text-secondary"
                              title="Bookmark"
                              href="#"
                            >
                              <span className="button-defaultState">
                                <span className="mr-3">
                                  <i className="far fa-bookmark"></i>
                                </span>
                              </span>                    
                            </a>
                            <a 
                              className="text-secondary"
                              title="Report"
                              href="javascript:void(0)"
                              id="PopoverReport" onClick={this.toggle}
                            >
                              <span className="button-defaultState">
                                <span>
                                  <i className="fas fa-angle-down"></i>
                                </span>
                              </span>                    
                            </a>                
                            <Popover placement="bottom" isOpen={this.state.popoverOpen} target="PopoverReport" toggle={this.toggle}>
                              <a className="dropdown-item" href="#">Action</a>
                            </Popover>
                          </div>
                        </div>
                      </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                       <div className="border-top p-4">
                        <div className="d-flex flex-row">
                          <div className="p-2">
                            <img
                                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                                className="img-fluid rounded-circle"
                                alt="Go to the profile"
                              />
                          </div>
                          <div className="p-2">
                            <h6 className="font-weight-normal"><a className="text-primary" href="#">Abc</a></h6>
                            <small>  Mar 23, 2017</small>
                          </div>
                        </div>
                        <div className="d-flex">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</div>
                      </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button outline color="primary" block className="py-4 my-4">
                    Show all responses
                  </Button>
                </Col>
              </Row>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default PostComments;
