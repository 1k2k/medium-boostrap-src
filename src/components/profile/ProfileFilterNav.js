import React from "react";
import {Container, Row, Col, Button, Media} from "reactstrap";
import { Nav, NavItem, NavLink } from 'reactstrap';

class ProfileFilterNav extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col sm="12" md="7">
            <Nav className="my-4 border-bottom">
              <NavItem className="border-bottom border-dark">
                <NavLink href="#">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Latest</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Highlights</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tab</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tab</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tab</NavLink>
              </NavItem>
              </Nav>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default ProfileFilterNav;
