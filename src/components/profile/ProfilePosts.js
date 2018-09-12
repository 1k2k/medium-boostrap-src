import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class ProfilePosts extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    return (
	   <Container>
        <Row className="justify-content-md-center">
          <Col sm="12" md="7">
            <h6 className="py-4 pl-3">Featured</h6>
            <Card className="mb-2">
              <CardBody>
                <div className="d-flex flex-row align-items-center mb-3">
                  <div>
                    <img
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                        className="img-fluid rounded-circle"
                        alt="Go to the profile"
                      />
                  </div>
                  <div className="ml-3">
                    <h6 className="font-weight-normal"><a className="text-secondary" href="#">Abc</a> in <a className="text-secondary" href="#">Abc</a></h6>
                    <small>  Mar 23, 2017</small>
                  </div>
                </div>
                <div><img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=598%C3%97179&w=598&h=179" alt="Card image cap" /></div>
              </CardBody>
              <CardBody>
                <h3>
                  Uber is Going to 0, and Benchmark Knows It!
                </h3>
                <h4 className="text-muted">
                  Why Airbnb is 100x Better Business than Uber
                </h4>
                <div className="py-2">
                  <CardLink href="#"><small>Read More...</small></CardLink>
                </div>
                <div className="pl-2 d-flex">
                  <div className="p-1">                   
                    <a 
                      className="text-secondary"
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
                      id="PopoverReportPost" onClick={this.toggle}
                    >
                      <span className="button-defaultState">
                        <span>
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>                    
                    </a>                
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="PopoverReportPost" toggle={this.toggle}>
                      <a className="dropdown-item py-2" href="#">Action</a>
                    </Popover>
                  </div>
                </div>
              </CardBody>
            </Card>
            <h6 className="py-4 pl-3">Latest</h6>
            <Card className="mb-2">
              <CardBody>
                <div className="d-flex flex-row align-items-center mb-3">
                  <div>
                    <img
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                        className="img-fluid rounded-circle"
                        alt="Go to the profile"
                      />
                  </div>
                  <div className="ml-3">
                    <h6 className="font-weight-normal"><a className="text-secondary" href="#">Abc</a> in <a className="text-secondary" href="#">Abc</a></h6>
                    <small>  Mar 23, 2017</small>
                  </div>
                </div>
                <div><img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=598%C3%97179&w=598&h=179" alt="Card image cap" /></div>
              </CardBody>
              <CardBody>
                <h3>
                  Uber is Going to 0, and Benchmark Knows It!
                </h3>
                <h4 className="text-muted">
                  Why Airbnb is 100x Better Business than Uber
                </h4>
                <div className="py-2">
                  <CardLink href="#"><small>Read More...</small></CardLink>
                </div>
                <div className="pl-2 d-flex">
                  <div className="p-1">                   
                    <a 
                      className="text-secondary"
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
                      id="PopoverReportPost" onClick={this.toggle}
                    >
                      <span className="button-defaultState">
                        <span>
                          <i className="fas fa-angle-down"></i>
                        </span>
                      </span>                    
                    </a>                
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="PopoverReportPost" toggle={this.toggle}>
                      <a className="dropdown-item py-2" href="#">Action</a>
                    </Popover>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>	
	  </Container>
    );
  }
}

export default ProfilePosts;
