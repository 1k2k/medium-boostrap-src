import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import { Media } from 'reactstrap';

class PostsBlock extends React.Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isPostTopLessThenZero: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    if(!this.postCon){
      return;
    }
    const postDomRect = this.postCon.getBoundingClientRect();    
      this.setState({
          isPostTopLessThenZero: (postDomRect.bottom - (postDomRect.height/3)) < 0
        });
  }
  render() {
    const isDockedTop = this.state.isPostTopLessThenZero ? 'isFixedTop' : '';
    return (
      <Container>
        <Row className="justify-content-center mt-4" >
          <Col xs="12" sm="7" className="py-4" >
            <div className="border-bottom mb-4" ref={(post) => (this.postCon = post)}>
              <h5 className="mb-4">Featured for members</h5>
            </div>
      			<Media className="my-4">              
      			  <Media body className="mr-4">
        				<h3 className="mt-0 mb-1">Post Title</h3>
        				<a href="#">
        					<div className="text-muted">
        					  An easy 25% increase in productivity
        					</div>
      				  </a>
      				  <small>
      					  <a href="#">Kunal Shandilya </a> in <a href="#"> Better Humans</a>
      					</small>
      					<div className="d-flex">
      					  <div className="py-2">
        						<small className="text-muted pr-2">
        						  <time>
        							Mar 3
        						  </time>
        						  <span className="middotDivider" />
        						  <span className="pr-2">
        							  <i className="fas fa-star"></i>
        						  </span>
        						  <span>8 min read</span>
        						</small>
        						<span>
                      <i className="fas fa-angle-down"></i>
                    </span>
      					  </div>
      					  <div className="ml-auto p-2"><i className="far fa-bookmark"></i></div>
      					</div>
      			  </Media>
              <Media right href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=130%C3%97130&w=130&h=130" alt="Generic placeholder image" />
              </Media>
      			</Media>
            <Media className="my-4">              
              <Media body className="mr-4">
                <h3 className="mt-0 mb-1">Post Title</h3>
                <a href="#">
                  <div className="text-muted">
                    An easy 25% increase in productivity
                  </div>
                </a>
                <small>
                  <a href="#">Kunal Shandilya </a> in <a href="#"> Better Humans</a>
                </small>
                <div className="d-flex">
                  <div className="py-2">
                    <small className="text-muted pr-2">
                      <time>
                      Mar 3
                      </time>
                      <span className="middotDivider" />
                      <span className="pr-2">
                        <i className="fas fa-star"></i>
                      </span>
                      <span>8 min read</span>
                    </small>
                    <span>
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </div>
                  <div className="ml-auto p-2"><i className="far fa-bookmark"></i></div>
                </div>
              </Media>
              <Media right href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=130%C3%97130&w=130&h=130" alt="Generic placeholder image" />
              </Media>
            </Media>
            <Media className="my-4">              
              <Media body className="mr-4">
                <h3 className="mt-0 mb-1">Post Title</h3>
                <a href="#">
                  <div className="text-muted">
                    An easy 25% increase in productivity
                  </div>
                </a>
                <small>
                  <a href="#">Kunal Shandilya </a> in <a href="#"> Better Humans</a>
                </small>
                <div className="d-flex">
                  <div className="py-2">
                    <small className="text-muted pr-2">
                      <time>
                      Mar 3
                      </time>
                      <span className="middotDivider" />
                      <span className="pr-2">
                        <i className="fas fa-star"></i>
                      </span>
                      <span>8 min read</span>
                    </small>
                    <span>
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </div>
                  <div className="ml-auto p-2"><i className="far fa-bookmark"></i></div>
                </div>
              </Media>
              <Media right href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=130%C3%97130&w=130&h=130" alt="Generic placeholder image" />
              </Media>
            </Media>
            <Media className="my-4">              
              <Media body className="mr-4">
                <h3 className="mt-0 mb-1">Post Title</h3>
                <a href="#">
                  <div className="text-muted">
                    An easy 25% increase in productivity
                  </div>
                </a>
                <small>
                  <a href="#">Kunal Shandilya </a> in <a href="#"> Better Humans</a>
                </small>
                <div className="d-flex">
                  <div className="py-2">
                    <small className="text-muted pr-2">
                      <time>
                      Mar 3
                      </time>
                      <span className="middotDivider" />
                      <span className="pr-2">
                        <i className="fas fa-star"></i>
                      </span>
                      <span>8 min read</span>
                    </small>
                    <span>
                      <i className="fas fa-angle-down"></i>
                    </span>
                  </div>
                  <div className="ml-auto p-2"><i className="far fa-bookmark"></i></div>
                </div>
              </Media>
              <Media right href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=33&txt=130%C3%97130&w=130&h=130" alt="Generic placeholder image" />
              </Media>
            </Media>          
          </Col>
          <Col xs="12" sm="4">
            <div className={isDockedTop}>
              <div className="border-bottom m-4"  >
                <h4 className="m-4">Popular on Medium</h4>
              </div>
              <div className="p-4">
                <Media className="mb-2">
                  <Media left href="#">
                    <h1 className="font-weight-normal lightText">
                      01
                    </h1>
                  </Media>
                  <Media body className="ml-3">
                    <Media heading className="h5">
                      The Teens Will Save Us
                    </Media>
                    <a href="#">
                      <div className="text-muted">
                        Dina Leygerman
                      </div>
                    </a>
                    <div className="d-flex">
                      <div className="mb-2">
                        <div className="text-muted pr-2">
                          <time>
                          Mar 3
                          </time>
                          <span className="middotDivider" />
                          <span>8 min read</span>
                        </div>
                      </div>
                    </div>
                  </Media>
                </Media>
                <Media className="mb-2">
                  <Media left href="#">
                    <h1 className="font-weight-normal lightText">
                      02
                    </h1>
                  </Media>
                  <Media body className="ml-3">
                    <Media heading className="h5">
                      The Teens Will Save Us
                    </Media>
                    <a href="#">
                      <div className="text-muted">
                        Dina Leygerman
                      </div>
                    </a>
                    <div className="d-flex">
                      <div className="mb-2">
                        <div className="text-muted pr-2">
                          <time>
                          Mar 3
                          </time>
                          <span className="middotDivider" />
                          <span>8 min read</span>
                        </div>
                      </div>
                    </div>
                  </Media>
                </Media>
                <Media>
                  <Media left href="#">
                    <h1 className="font-weight-normal lightText">
                      03
                    </h1>
                  </Media>
                  <Media body className="ml-3">
                    <Media heading className="h5">
                      The Teens Will Save Us
                    </Media>
                    <a href="#">
                      <div className="text-muted">
                        Dina Leygerman
                      </div>
                    </a>
                    <div className="d-flex">
                      <div className="mb-2">
                        <div className="text-muted pr-2">
                          <time>
                          Mar 3
                          </time>
                          <span className="middotDivider" />
                          <span>8 min read</span>
                        </div>
                      </div>
                    </div>
                  </Media>
                </Media>
              </div>              
            </div>
          </Col>
        </Row>
    		<Row className="justify-content-center">
          <Col>
    			<footer className="mt-4">
            <div className="d-flex justify-content-center">
              <small className="p-2">
                <a
                  className="link text-muted"
                  href="#"
                >
                  About
                </a>
              </small>
              <small className="p-2">
                <a
                  className="link text-muted"
                  href="#"
                >
                  Contact
                </a>
              </small>
              <small className="p-2">
                <a
                  className="link text-muted"
                  href="#"
                >
                  Blog
                </a>
              </small>
              <small className="p-2">
                <a
                  className="link text-muted"
                  href="#"
                >
                  Careers
                </a>
              </small>
              <small className="p-2">
                <a
                  className="link text-muted"
                  href="#"
                >
                  Privacy
                </a>
              </small>
            </div>
    			</footer>
          </Col>
    		</Row>
      </Container>
    );
  }
}

export default PostsBlock;
