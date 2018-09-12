import React from "react";
import {Container, Row, Col, Button, Media} from "reactstrap";
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class ProfileIntroCon extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle(e) {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  render() {
    return (
      <Container>
          <Row className="justify-content-md-center">
            <Col sm="12" md="7">
                <Row className="pt-4">
                  <Col>
                    <Media tag="li">
                      <Media body>
                        <Media heading tag="h3">
                          Matt Ward
                        </Media>
                        <p className="h4 text-dark font-weight-light">Angel Investor, Startup Advisor, Entrepreneur, Writer, Crypto
                        Enthusiast | Founder: THESYNDICATE.VC Tech & VC Investing
                        Podcast | 3 ecommerce exits</p>
                      </Media>
                      <Media right href="#">
                        <Media object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=100%C3%97100&w=100&h=100" className="img-fluid rounded-circle" alt="Generic placeholder image" />
                      </Media>
                    </Media>
                    <div className="mt-2">
                      <span className="text-muted">Top writer in{" "}</span>
                      <a className="link" href="#">
                        Venture Capital
                      </a>,{" "}
                      <a className="link" href="#">
                        Startup
                      </a>,{" "}
                      <a className="link" href="#">
                        Business
                      </a>,{" "}
                      <a className="link" href="#">
                        Bitcoin
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="d-flex">
                      <div className="py-2 pr-2">
                        <a
                          className="link text-muted"
                          href="#"
                          title="Show 334 people following"               
                        >
                          <small><b>334</b> Following</small>
                        </a>
                      </div>
                      <div className="py-2 pr-2">
                      <a
                        className="link"
                        href="#"
                        title="Show 2K people followers"                
                      >
                        <small><b className="text-muted">2K</b> Followers</small>
                      </a>
                      </div>
                      <div className="py-2 pr-2"><span className="middotDivider u-marginHorizontal5 normalColorText" /></div>
                      <div className="py-2 pr-2">
                          <a
                            color="link"
                            className="link text-secondary"
                            title="Share on Twitter"
                            href="#"
                          >
                            <span className="mr-1">
                             <i className="fab fa-twitter"></i>
                            </span>
                          </a>
                        </div>
                        <div className="py-2 pr-2">
                          <a
                            color="link"
                            className="link text-secondary"
                            title="Share on Facebook"
                            href="#"
                          >
                            <span className="mr-1">
                              <i className="fab fa-facebook"></i>
                            </span>
                          </a> 
                        </div>
                    </div>
                    <div className="d-flex mx-auto">
                      <Button outline color="success">Follow</Button>
                      <a id="PopoverUserAction" onClick={this.toggle} className="text-secondary p-2" href="javascript:void(0)"><i className="fas fa-angle-down"></i></a>
                      <Popover placement="bottom" isOpen={this.state.popoverOpen} target="PopoverUserAction" toggle={this.toggle}>
                        <PopoverBody>
                          <a className="dropdown-item" href="#">Action</a>
                          <a className="dropdown-item" href="#">Another action</a>
                        </PopoverBody>
                      </Popover>
                    </div>
                  </Col>
                </Row>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default ProfileIntroCon;
