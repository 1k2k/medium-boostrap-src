import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Postview from './Postview';
import Profile from './Profile';
import Stories from './Stories';
import WriteStory from './WriteStory';
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
   <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/postview' component={Postview}/>
	    <Route path='/profile' component={Profile}/>
	    <Route path='/stories' component={Stories}/>
	    <Route path='/writestory' component={WriteStory}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
