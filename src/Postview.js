import React, { Component } from 'react';
import HeaderCon from "./components/header/HeaderCon";
import PostViewCon from "./components/postview/PostViewCon";
import PostFooterStickyActions from "./components/postview/PostFooterStickyActions";
import {Container} from "reactstrap"
import './PostView.css';

class App extends Component {
   constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
	this.state = {
      hiddenClass:'',
  	  visibleClass:'isVisible fixed-top',
      lastScrollPos:0,
  	  lastPostViewScrollPos:0
    };
  }

  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
  	const mainDomRect = this.mainCon.getBoundingClientRect();
      if(this.state.lastScrollPos > mainDomRect.top) {
        this.setState({
          hiddenClass:'',
          lastScrollPos:mainDomRect.top
        });
      } else if(this.state.lastScrollPos < mainDomRect.top) {
        this.setState({
          hiddenClass:'isVisible',
          lastScrollPos:mainDomRect.top
        });
      }
  	if(mainDomRect.top < 0){
      if(this.state.lastPostViewScrollPos > mainDomRect.top) {
        this.setState({
      		visibleClass:'isVisibleHidden',
          lastPostViewScrollPos:mainDomRect.top
        });
      } else if(this.state.lastPostViewScrollPos < mainDomRect.top) {
        this.setState({
      		visibleClass:'isVisible fixed-top',
          lastPostViewScrollPos:mainDomRect.top
        });
      }
  	}
  }
  render() {
    return (
      <div className="site-main surface-container" ref={(main) => (this.mainCon = main)}>
  			<div className={this.state.visibleClass}>
  				<HeaderCon/>
  			</div>
  			<div className="fixHeight70"></div>
        <PostViewCon />
        <PostFooterStickyActions hiddenClass={this.state.hiddenClass} />
      </div>
    );
  }
}

export default App;
