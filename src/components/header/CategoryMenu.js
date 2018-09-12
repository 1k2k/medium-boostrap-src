import React from "react";
import {Container, Row, Col, Button} from "reactstrap";
import {Nav, NavItem, NavLink} from "reactstrap";
import Slider from "react-slick";

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <i
      className={className}
      onClick={onClick}
    ></i>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <i
      className={className}
      onClick={onClick}
    ></i>
  );
}

class HeaderCon extends React.Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  next() {
    this.slider.slickNext()
  }
  previous() {
    this.slider.slickPrev()
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  componentDidMount() { setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0); }

  render() {
    const settings = {
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    }
    return (
         <Row className="justify-content-center">
          <Col xs="10">
            <Nav>
              <Slider ref={cd => this.slider = cd } {...settings}>
                <NavItem>
                <NavLink href="#" className="ds-link ds-link--stylePointer">Home</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link1</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link2</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link3</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link4</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link5</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link6</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="#">Link</NavLink>
                </NavItem>
              </Slider>
            </Nav>
          </Col>
        </Row>
    );
  }
}

export default HeaderCon;