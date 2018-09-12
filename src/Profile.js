import React, { Component } from 'react';
import HeaderCon from "./components/header/HeaderCon";
import ProfileIntroCon from "./components/profile/ProfileIntroCon";
import ProfileFilterNav from "./components/profile/ProfileFilterNav";
import ProfilePosts from "./components/profile/ProfilePosts";
import {Container} from "reactstrap"

class Fiverr extends Component {
  render() {
  	return (
      <Container fluid className="site-main surface-container">
            <HeaderCon />
          <ProfileIntroCon />
          <ProfileFilterNav />
          <ProfilePosts />
      </Container>
    );
  }
}

export default Fiverr;
