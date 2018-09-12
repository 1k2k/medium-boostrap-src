import React from "react";
import {Container, Row, Col, Button} from "reactstrap";

class PostFooterStickyActions extends React.Component {
  render() {
    return (
      <div className={"postSocialBar "+ this.props.hiddenClass}>
		<Container fluid className="postSocialBarCon">
			<Row className="postSocialBarContent normalBoxShadow" style={{backgroundColor: '#fff'}}>
				<Col sm="12" md={{ size: 10, offset: 2 }}>
				<div className="postSocial">
					<div className="d-flex align-items-center">
					  <div className="mr-auto">
						<a 
						  className="text-secondary"
						  href="#"
						>
						  <span className="mr-1">
							<i className="far fa-thumbs-up"></i>
						  </span>
						</a>
						<small> 1 </small>
					  </div>
					  <div>
						  <Button color="link" className="p-1 text-secondary">
							<span className="mr-1">
							  <i className="far fa-comment"></i>
							</span>
						  </Button>
						  <small className="mr-1">
							19
						  </small>
						  <Button
							color="link"
							className="p-1 text-secondary"
							title="Share on Twitter"
						  >
							<span className="mr-1">
							 <i className="fab fa-twitter"></i>
							</span>
						  </Button>
						  <Button
							color="link"
							className="p-1 text-secondary"
							title="Share on Facebook"
						  >
							<span className="mr-1">
							  <i className="fab fa-facebook"></i>
							</span>
						  </Button>                  
						  <Button
							color="link"
							className="p-1 text-secondary"
							title="Bookmark this story to read later"   
						  >
							<span className="button-defaultState">
							  <span className="mr-2">
								<i className="far fa-bookmark"></i>
							  </span>
							</span>
						  </Button>
					  </div>
					  <div className="xsHide"><div className="iconSetDivider" /></div>
					  <div className="xsHide">
						<div>
						  <a
							className="link"
							href="#"
						  >
							<div>
							  <small>
								Next story
							  </small>
							  <h6>
								Apollo Server 1.0...
							  </h6>
							</div>
						  </a>
						</div>
					  </div>
					</div>
				</div>
				</Col>
			</Row>
		</Container>
      </div>
    );
  }
}

export default PostFooterStickyActions;
