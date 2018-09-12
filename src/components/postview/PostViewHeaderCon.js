import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import { Media } from 'reactstrap';

class PostViewHeaderCon extends React.Component {
  render() {
    return (
      <Container>
        <Row className="py-4">
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Media>
              <Media left href="#" className="mt-2">
                <img
                  src="https://placeholdit.imgix.net/~text?txtsize=33&txt=60%C3%9760&w=60&h=60"
                  className="img-fluid rounded-circle"
                  alt="Go to the profile of Jonas Helfer"
                />
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
                <div className="text-muted">
                  <time dateTime="2017-03-21T17:33:02.789Z">Mar 21, 2017</time>
                  <span className="middotDivider" />
                  <span>9 min read</span>
                </div>
              </Media>
            </Media>
          </Col>
        </Row>        
      </Container>
    );
  }
}

export default PostViewHeaderCon;
