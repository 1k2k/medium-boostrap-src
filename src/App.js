import React, { Component } from 'react';
import HeaderCon from "./components/header/HeaderCon";
import CategoryMenu from "./components/header/CategoryMenu";
import HomeCon from "./components/HomeCon";
import {Container} from "reactstrap"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isCategoryBottomLessThenZero: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    if(!this.categoryNav){
      return;
    }
    const categoryDomRect = this.categoryNav.getBoundingClientRect();
      this.setState({
          isCategoryBottomLessThenZero: (categoryDomRect.bottom - (categoryDomRect.height/3)) < 0
        });
  }
  render() {
    const overlayClass = this.state.isCategoryBottomLessThenZero ? 'headerBarFixed fixed-top' : '';
  	return (
          <div>
              <HeaderCon positionTypeClass={"absoluteTop fixed-top"}/>
              <div ref={el => this.categoryNav = el} style={{height: "70px"}}></div>
              <div className={overlayClass}>
                <div>
                  <CategoryMenu/>
                </div>
            </div>
            <HomeCon />
          </div>
    );
  }
}

export default App;
