import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default class App extends Component {
  pages = 6;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress : 0
  }
  setProgress = (progress)=> {
   this.setState({progress: progress})
  }
  render() {
    return (
      <Router>
      <div>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Navbar/>
        <Switch>
          <Route exact path="/newsDog-cb"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pages} country="in" category="general"/></Route>
          <Route exact path="/newsDog-cb/general"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="general" pageSize={this.pages} country="in" category="general"/></Route>
          <Route exact path="/newsDog-cb/business"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="business" pageSize={this.pages} country="in" category="business"/></Route>
          <Route exact path="/newsDog-cb/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="entertainment" pageSize={this.pages} country="in" category="entertainment"/></Route>
          <Route exact path="/newsDog-cb/health"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="health" pageSize={this.pages} country="in" category="health"/></Route>
          <Route exact path="/newsDog-cb/science"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="science" pageSize={this.pages} country="in" category="science"/></Route>
          <Route exact path="/newsDog-cb/sports"><News setProgress={this.setProgress}  apiKey={this.apiKey} key="sports" pageSize={this.pages} country="in" category="sports"/></Route>
          <Route exact path="/newsDog-cb/technology"><News setProgress={this.setProgress} apiKey={this.apiKey}  key="technology" pageSize={this.pages} country="in" category="technology"/></Route>
         </Switch> 
      </div>
      </Router>
    )
  }
}
