import React from "react";
import {Container, Row, Col, Button, Media} from "reactstrap";

class PostAuther extends React.Component {

  render() {
    return (
      <Container>
        <Row className="py-4 justify-content-md-center pt-3">
          <Col xs="12" sm="4" md="4" className="border-top">
            <div className="py-3">            
              <Media>
                <Media left href="#">
                    <a
                    href="#"
                    dir="auto"
                    >
                      <img
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=60%C3%9760&w=60&h=60"
                        className="img-fluid rounded-circle"
                        alt="Go to the profile of Jonas Helfer"
                      />
                    </a>
                </Media>
                <Media body className="pl-3">
                  <Media heading>
                    <a
                      href="#"
                      dir="auto"
                    >
                      Jonas Helfer
                    </a>
                    <Button outline color="primary" size="sm" className="py-0 ml-3">Follow</Button>
                  </Media>
                  <div className="text-muted">
                    Software Engineer from Switzerland, now living in San
                    Francisco. GraphQL Evangelist @databricks
                  </div>
                </Media>
              </Media>
            </div>
          </Col>
          <Col xs="12" sm="4" md="4" className="border-top">
            <div className="py-3">            
              <Media>
                <Media left href="#">
                    <a
                    href="#"
                    dir="auto"
                    >
                      <img
                        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=60%C3%9760&w=60&h=60"
                        className="img-fluid rounded-circle"
                        alt="Go to the profile of Jonas Helfer"
                      />
                    </a>
                </Media>
                <Media body className="pl-3">
                  <Media heading>
                    <a
                      href="#"
                      dir="auto"
                    >
                      Jonas Helfer
                    </a>
                    <Button outline color="primary" size="sm" className="py-0 ml-3">Follow</Button>
                  </Media>
                  <div className="text-muted">
                    Software Engineer from Switzerland, now living in San
                    Francisco. GraphQL Evangelist @databricks
                  </div>
                </Media>
              </Media>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PostAuther;
