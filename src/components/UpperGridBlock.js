import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,CardDeck } from 'reactstrap';

class UpperGridBlock extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-4">
          <Col xs="12" sm="5" className="pr-0">
            <Card className="h-100 border-0">
              <CardBody>
                <CardTitle>Eating Disorders Do Not Equal Thinness</CardTitle>
                <CardText>The below original text was the basis for Data & Society Founder and President danah boyd’s March 2018 SXSW Edu keynote,“What Hath We…</CardText>
                <div className="d-flex flex-row">
                  <div className="py-2">
                    <a
                        href="#"
                      >
                        Hanna Brooks Olsen
                      </a>
                  </div>
                  <div className="py-2">
                    <span className="middotDivider"></span>
                  </div>
                  <div className="py-2">
                    <small>6 min read</small>
                  </div>
                </div>
              </CardBody>
              <CardBody>
                <CardImg bottom  width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=463%C3%97332&w=463&h=332" alt="Card image cap"/>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="7" className="pl-0">
            <Row className="h-50">
              <Col>
                <Card className="border-0">
                  <CardBody>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=335%C3%97168&w=335&h=168" alt="Card image cap"/>
                    <CardTitle className="pt-2">Eating Disorders Do Not Equal Thinness</CardTitle>
                    <div className="d-flex align-items-center">
                      <div className="py-2">
                        <a href="#">
                            Hanna Brooks Olsen
                          </a>
                      </div>
                      <div className="py-2">
                        <span className="middotDivider"></span>
                      </div>
                      <div className="py-2">
                        <small className="text-muted"><i className="fas fa-star"></i></small>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <CardBody>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=335%C3%97168&w=335&h=168" alt="Card image cap"/>
                    <CardTitle className="pt-2">Eating Disorders Do Not Equal Thinness</CardTitle>
                    <div className="d-flex align-items-center">
                      <div className="py-2">
                        <a href="#">
                            Hanna Brooks Olsen
                          </a>
                      </div>
                      <div className="py-2">
                        <span className="middotDivider"></span>
                      </div>
                      <div className="py-2">
                        <small className="text-muted"><i className="fas fa-star"></i></small>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>  
            <Row className="h-50">
              <Col className="align-self-end">
                <Card className="border-0">
                  <CardBody>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=335%C3%97168&w=335&h=168" alt="Card image cap"/>
                    <CardTitle className="pt-2">Eating Disorders Do Not Equal Thinness</CardTitle>
                    <div className="d-flex align-items-center">
                      <div className="py-2">
                        <a href="#">
                            Hanna Brooks Olsen
                          </a>
                      </div>
                      <div className="py-2">
                        <span className="middotDivider"></span>
                      </div>
                      <div className="py-2">
                        <small className="text-muted"><i className="fas fa-star"></i></small>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="align-self-end">
                <Card className="border-0">
                  <CardBody>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=335%C3%97168&w=335&h=168" alt="Card image cap"/>
                    <CardTitle className="pt-2">Eating Disorders Do Not Equal Thinness</CardTitle>
                    <div className="d-flex align-items-center">
                      <div className="py-2">
                        <a href="#">
                            Hanna Brooks Olsen
                          </a>
                      </div>
                      <div className="py-2">
                        <span className="middotDivider"></span>
                      </div>
                      <div className="py-2">
                        <small className="text-muted"><i className="fas fa-star"></i></small>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UpperGridBlock;
