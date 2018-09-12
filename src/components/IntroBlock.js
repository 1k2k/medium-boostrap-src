import React from "react";
import {Container, Row, Col, Button} from "reactstrap";

class IntroBlock extends React.Component {
  render() {
    return (
	<Container>
		  <Row className="justify-content-center">
				<Col xs="12" sm="5" className="p-4 lighterColorBg">
				  <div>
					<div className="h1 mb-4">
					  <b>Interesting ideas that set your mind in motion.</b>
					</div>
					<div className="py-2">
					  Hear directly from the people who know it best. From tech to
					  politics to creativity and more — whatever your interest, we’ve
					  got you covered.
					</div>
				  </div>
				  <div className="mt-4">
					<Button color="secondary" className="mr-2">Get Started</Button>
					<Button outline color="secondary">Learn More</Button>
				  </div>
				</Col>
				<Col xs="12" sm="5"
					  className="xsHide bgContainer lighterColorBg"
					  style={{
						backgroundImage:
						  "url(https://cdn-images-1.medium.com/max/2000/1*TckFXfkU_bg0aADPYR_t7Q.png)",
						backgroundPosition: "bottom right"
					  }}
				>
				</Col>
		 </Row>
	</Container>
    );
  }
}

export default IntroBlock;
