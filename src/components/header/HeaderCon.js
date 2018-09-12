import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import {Nav, NavItem, NavLink} from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Form, FormGroup,Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,  
  UncontrolledDropdown
  } from 'reactstrap';
import Slider from "react-slick";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import ReactTags from 'react-tag-autocomplete'

class Publish extends React.Component {
  constructor(props) {
    super(props);

    this.togglePublishPopover = this.togglePublishPopover.bind(this);
    this.state = {
      publishPopoverOpen: false,
      tags: [],
      suggestions: [
        { id: 3, name: "abc" },
        { id: 4, name: "def" },
        { id: 5, name: "ghi" },
        { id: 6, name: "lmn" }
      ]
    };
  }

  togglePublishPopover() {
    this.setState({
      publishPopoverOpen: !this.state.publishPopoverOpen
    });
  }

   handleDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }

  render() {
    return (
	    <NavItem className="list-inline-item align-self-center text-success">
			<NavLink id="publishPopover" onClick={this.togglePublishPopover} href="#">Publish <span className="faicon"><i className="fas fa-angle-down"></i></span></NavLink>
			<Popover placement="bottom" isOpen={this.state.publishPopoverOpen} target="publishPopover" toggle={this.togglePublishPopover}>
	          <PopoverBody className="text-muted">
	          	<h5> Ready to publish? </h5>
	          	<Row><Col className="mb-4">
	          		Add or change tags (up to 5) so readers know what your story is about:
	          	</Col></Row>	          	
	          	<Row>
		          	<Col>
			          	<ReactTags
			          		allowNew={true}
					        tags={this.state.tags}
					        suggestions={this.state.suggestions}
					        handleDelete={this.handleDelete.bind(this)}
					        handleAddition={this.handleAddition.bind(this)} 
					     />
		          	</Col>
	          	</Row>
	          	<Row><Col className="my-4 ">
	          	<div className="border-bottom py-2">
	          		Tip: add a high resolution image to your story to capture people’s interest
	          	</div>
	          	</Col></Row>
	          	<Row><Col className="mb-2">
	          	<div className="border-bottom py-2">
	          		<div className="mb-2"><a href="#"><i className="fab fa-twitter"></i> Connect to share on Twitter</a></div>
	          		<div><a href="#"><i className="fab fa-facebook"></i> Connect to share on Facebook</a></div>
	          	</div>	          		
	          	</Col></Row>
	          	<Row><Col>
		          	<div className="text-right my-2">
	                  <Button tag="a" href="#" outline color="success" >Publish</Button>
	                </div>
	          	</Col></Row>
	          </PopoverBody>
	        </Popover>
		</NavItem>
    );
  }
}


class HeaderCon extends React.Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
    this.state = {
      popoverOpen: false,
      modal: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  modalToggle() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
  	const isWriteStory = this.props.isWriteStory;
    return (
	<Container fluid className={this.props.positionTypeClass} >
	<Row className="headerBarFixed">
		<Col xs="12" md={{ size: 10, offset: 1 }} >
        <Navbar className="py-0" color="faded" light expand="md" style={{backgroundColor: '#fff'}}>
		 <Nav className="middleLogoNav">
				<NavItem>
					<NavLink href="/">Logo</NavLink>
				 </NavItem>
			  </Nav>
			  <Nav className="xsHide" navbar>
				  <NavItem>
					<NavLink href="/" className="p-0"><Button outline color="secondary" size="sm">Upgrade</Button></NavLink>
				  </NavItem>
			  </Nav>
			  <Nav className="ml-auto list-inline rightSideItemsNav">
					<NavItem className="list-inline-item searchInput align-self-center">
						<span className="xsHide navbar-text">
							<label title="Search" className="align-self-center mb-0">
								<span className="faicon"><i className="fa fa-search"></i></span>
								<input className="form-control border-0 onFocusChangeInput" type="search" placeholder="Search" />
							</label>
					    </span>
						<Button tag="a" color="link" className="smHide text-muted p-0" onClick={this.modalToggle}><i className="fa fa-search"></i></Button>
						<Modal isOpen={this.state.modal} fade={false} toggle={this.modalToggle} className="userSignupModal">
			                <ModalHeader toggle={this.modalToggle}>Search Medium</ModalHeader>
			                <ModalBody>
			                <Container>
			                  <Row>
			                  <Col>
			                    <Form>
			                    <FormGroup row>
			                      <Col>
			                        <Input className="searchModalInput rounded-0 border-top-0 border-right-0 border-left-0" placeholder="Search Here" bsSize="lg" />
			                      </Col>
			                    </FormGroup>
			                  </Form>               
			                  </Col>
			                  </Row>
			                  </Container>
			                </ModalBody>
			              </Modal>
					</NavItem>
					{!isWriteStory &&
						<NavItem className="list-inline-item align-self-center">
							<NavLink href="#"><span className="faicon"><i className="far fa-bell"></i></span></NavLink>
						</NavItem>
					}

					{isWriteStory &&
						<Publish />
					}

					<NavItem className="list-inline-item align-self-center headerRightItems">
						<Button tag="span" id="PopoverProfile" onClick={this.toggle} color="link" className="userProfile">
						  <i className="fas fa-user-circle"></i>
						</Button>
						<Popover container="body" placement="bottom" isOpen={this.state.popoverOpen} target="PopoverProfile" toggle={this.toggle}>
						  <PopoverBody>
							  <DropdownItem>Action</DropdownItem>
							  <div className="dropdown-divider"></div>
							  <DropdownItem>Action</DropdownItem>
							  <DropdownItem>Action</DropdownItem>
							  <DropdownItem>Action</DropdownItem>
							  <div className="dropdown-divider"></div>
							  <DropdownItem>Action</DropdownItem>
							  <DropdownItem>Action</DropdownItem>
							  <DropdownItem>Action</DropdownItem>
						  </PopoverBody>
						</Popover>
					</NavItem>
			  </Nav>
			 	
		</Navbar>
		</Col>
	</Row>
	</Container>
    );
  }
}

export default HeaderCon;