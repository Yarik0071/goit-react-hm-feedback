import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Buttons from "./components/buttons.js"
import Statistic from './components/statistic.js'
import SerchBar from './components/form.js'

import './styles.css'
const socket = new WebSocket('wss://trade.trademux.net:8800/?password=1234');


class App extends Component {
  state = {
    array: [],
    total: 0,
    currentValue: 0,
    currentTime: 0
  };
  

  fetchLink = (totalLink, time) => {
    fetch(totalLink)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          let secondTime = new Date().getTime()
          let currentTime = secondTime - time
          this.setState({currentTime: currentTime})
        });

  }

  getValueFromSocet = (e) => {
    let number = JSON.parse(e.data)
      this.setState({array: [...this.state.array, number.value]})
  }

  takeValue = () => {
    socket.addEventListener('message', (e) => {this.getValueFromSocet(e)});
  }

  getStatisticValue = () => {
    const { array } = this.state


    let length = array.length - 1
    let mean = array.reduce((a,b) => a+b)/length
    let stanDev = Math.sqrt(array.map(x => Math.pow(x-mean,2)).reduce((a,b) => a+b)/length);

      this.setState({
        total: Math.trunc(mean),
        currentValue: Math.trunc(stanDev)
      })
  }

  render() {

    return (
      <>
      <Buttons takeValue={this.takeValue} getStatisticValue={this.getStatisticValue}></Buttons>
      <Statistic total={this.state.total} stanDev={this.state.currentValue}></Statistic>
      <SerchBar fetchLink={this.fetchLink} currentTime={this.state.currentTime}></SerchBar>
      </>
    );
  }
}


ReactDOM.render(<App/>, document.getElementById('root'));
