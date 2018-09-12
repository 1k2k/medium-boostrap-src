import React, { Component } from 'react';
import HeaderCon from "./components/header/HeaderCon";
import WriteStoryCon from "./components/stories/WriteStoryCon";
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
  				<HeaderCon isWriteStory={true}/>
  			</div>
  			<div className="fixHeight70"></div>
        <WriteStoryCon />
      </div>
    );
  }
}

export default Stories;
