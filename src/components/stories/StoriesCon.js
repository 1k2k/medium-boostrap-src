import React from "react";
import {Container, Row, Col, Button, Media} from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


class StoriesCon extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.togglePopover = this.togglePopover.bind(this);

    this.state = {
      activeTab: '1',
      popoverOpen: false
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  togglePopover(e) {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    return (
      <Container fluid className="mt-4 stories-container">
          <Row>
            <Col xs="12" md={{ size: 10, offset: 1 }}>
              <div className="d-flex align-items-center">
                <h1><strong>Your stories</strong></h1>
                <div className="ml-auto">
                  <Button outline color="secondary" className="mr-2">Import a story</Button>
                  <Button tag="a" href="/writestory" outline color="success" >Write a story</Button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm="12" md="10" className="mt-4">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                    >
                      Drafts 1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: this.state.activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                    >
                      Public
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                      <div className="py-4 border-bottom">
                        <h5><strong>Story 1</strong></h5>
                        <div className="d-flex align-items-center">
                          <small>Created 2 hrs ago</small>
                          <div className=""><span className="middotDivider u-marginHorizontal5 normalColorText" /></div>
                          <a id="PopoverUserAction1" onClick={this.togglePopover} className="text-secondary" href="javascript:void(0)"><i className="fas fa-angle-down"></i></a>
                          <Popover placement="bottom" isOpen={this.state.popoverOpen} target="PopoverUserAction1" toggle={this.togglePopover}>
                            <PopoverBody>
                              <a className="dropdown-item" href="#">Edit Draft</a>
                              <a className="dropdown-item" href="#">Delete Draft</a>
                            </PopoverBody>
                          </Popover>
                        </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row className="text-center justify-content-center align-items-center" style={{"minHeight":"350px"}}>
                      <Col>
                          <label>You haven’t published any public stories yet.</label>
                      </Col>   
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
      </Container>
    );
  }
}

export default StoriesCon;
