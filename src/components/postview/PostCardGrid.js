import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody,Media } from 'reactstrap';

class PostCardGrid extends React.Component {
  render() {
    return (
      <div className="lightGrayBg">
         <Container>
          <Row className="py-4">
            <Col>
              <CardDeck>
                <Card className="mx-1">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97100&w=256&h=100" alt="Card image cap" />
                  <CardBody>
                    <CardSubtitle className="font-weight-normal">Card subtitle</CardSubtitle>
                    <CardTitle>Card title</CardTitle>
                    <Media>
                      <Media left href="#">
                        <img
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                          className="rounded-circle mt-2"
                          alt="Go to the profile"
                        />
                      </Media>
                      <Media body className="pl-2 d-flex">
                        <div>                   
                          <a
                            className="text-dark"
                            href="#"
                          >
                            Rohit Bakhshi
                          </a><br/>                        
                          <small className="text-secondary">4 min read</small>
                        </div>
                        <div className="ml-auto">
                          <a 
                            className="text-secondary"
                            href="#"
                          >
                            <span className="mr-1">
                              <i className="far fa-thumbs-up"></i>
                            </span>
                          </a>
                          <small className="mr-1">
                            1.6K
                          </small>
                          <span className="border-left mx-2"></span>                                            
                          <a 
                            className="text-secondary"
                            title="Bookmark"
                            href="#"
                          >
                            <span className="button-defaultState">
                              <span className="mr-2">
                                <i className="far fa-bookmark"></i>
                              </span>
                            </span>                    
                          </a>                  
                        </div>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
                <Card className="mx-1">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97100&w=256&h=100" alt="Card image cap" />
                  <CardBody>
                    <CardSubtitle className="font-weight-normal">Card subtitle</CardSubtitle>
                    <CardTitle>Card title</CardTitle>
                    <Media>
                      <Media left href="#">
                        <img
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                          className="rounded-circle mt-2"
                          alt="Go to the profile"
                        />
                      </Media>
                      <Media body className="pl-2 d-flex">
                        <div>                   
                          <a
                            className="text-dark"
                            href="#"
                          >
                            Rohit Bakhshi
                          </a><br/>                        
                          <small className="text-secondary">4 min read</small>
                        </div>
                        <div className="ml-auto">
                          <a 
                            className="text-secondary"
                            href="#"
                          >
                            <span className="mr-1">
                              <i className="far fa-thumbs-up"></i>
                            </span>
                          </a>
                          <small className="mr-1">
                            1.6K
                          </small>
                          <span className="border-left mx-2"></span>                                            
                          <a 
                            className="text-secondary"
                            title="Bookmark"
                            href="#"
                          >
                            <span className="button-defaultState">
                              <span className="mr-2">
                                <i className="far fa-bookmark"></i>
                              </span>
                            </span>                    
                          </a>                  
                        </div>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
                <Card className="mx-1">
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97100&w=256&h=100" alt="Card image cap" />
                  <CardBody>
                    <CardSubtitle className="font-weight-normal">Card subtitle</CardSubtitle>
                    <CardTitle>Card title</CardTitle>
                    <Media>
                      <Media left href="#">
                        <img
                          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=36%C3%9736&w=36&h=36"
                          className="rounded-circle mt-2"
                          alt="Go to the profile"
                        />
                      </Media>
                      <Media body className="pl-2 d-flex">
                        <div>
                          <a
                            className="text-dark"
                            href="#"
                          >
                            Rohit Bakhshi
                          </a><br/>
                          <small className="text-secondary">4 min read</small>
                        </div>
                        <div className="ml-auto">
                          <a 
                            className="text-secondary"
                            href="#"
                          >
                            <span className="mr-1">
                              <i className="far fa-thumbs-up"></i>
                            </span>
                          </a>
                          <small className="mr-1">
                            1.6K
                          </small>
                          <span className="border-left mx-2"></span>                                            
                          <a 
                            className="text-secondary"
                            title="Bookmark"
                            href="#"
                          >
                            <span className="button-defaultState">
                              <span className="mr-2">
                                <i className="far fa-bookmark"></i>
                              </span>
                            </span>                    
                          </a>                  
                        </div>
                      </Media>
                    </Media>
                  </CardBody>
                </Card>
              </CardDeck>
            </Col>
          </Row>        
        </Container>
      </div>
    );
  }
}

export default PostCardGrid;
