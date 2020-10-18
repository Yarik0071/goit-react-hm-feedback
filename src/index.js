import React from 'react';
import ReactDOM from 'react-dom';
import FeedbackOptions from "./components/feedBack/FeedBack.js"
import Statistics from "./components/statistics/Statistics.js"
import Section from "./components/section/Section.js"
import Notification from "./components/notification/Notification.js"
import { Component } from 'react';

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    }

uppervalue = (field) => { 
    this.setState(prevState => {
      return {
        [field]: prevState[field] + 1
      }
     })
  }
    
countTotalFeedback = () => {
      return  (this.state.good + this.state.neutral + this.state.bad)
      }
        
  countPositiveFeedbackPercentage = (total) => {
    let num = 0
    total === 0 ? num = 0 : num = (this.state.good / total) * 100
        return Math.floor(num)
      }


    render () {
      let total = this.countTotalFeedback()
      let positiveFeedback = this.countPositiveFeedbackPercentage(total)
      
      return (
        <>
  <Section title={"Please leave feedback"} child={
    <FeedbackOptions
    options={this.uppervalue}
    />
  } />
    <Section title={"Statistics"} child={
        total === 0
        ? <Notification message={"No feedback given"}/> 
        : <Statistics 
      good={this.state.good} 
      neutral={this.state.neutral} 
      bad={this.state.bad} 
      total={total} 
      positivePercentage={positiveFeedback}/> 
    }/>
    </>
      )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
