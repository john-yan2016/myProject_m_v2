import React, { Component } from 'react';
import { hashHistory } from 'react-router'
import { Grid } from 'antd-mobile';
import './App.css';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
    };
  }
  handleClick = (e)=>{
    // console.log(e);
    hashHistory.push({pathname:e.url});
  }
  render() {
    return (
      <div className="app">
        <div className="sub-title">个人信息</div>
      </div>
    );
  }
}

export default App;
