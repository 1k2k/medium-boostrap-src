import React, { Component } from 'react';
import HeaderCon from "./components/header/HeaderCon";
import StoriesCon from "./components/stories/StoriesCon";
import {Container} from "reactstrap"
import './Stories.css';

class Stories extends Component {
   constructor() {
    super();

	this.state = {
      hiddenClass:'',
    };
  }

  render() {
    return (
      <div className="site-main surface-container" ref={(main) => (this.mainCon = main)}>
  			<div>
  				<HeaderCon/>
  			</div>
  			<div className="fixHeight70"></div>
        <StoriesCon />
      </div>
    );
  }
}

export default Stories;
