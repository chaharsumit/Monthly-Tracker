import React from "react";
import Header from './Header';
import Form from './Form';
import Main from './Main';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputVal: '',
      activities: []
    }
  }

  handleInput = ({ target }) => {
    this.setState({
      inputVal : target.value
    })
  }

  getCurrentMonth = () => {
    const dateObj = new Date()
    const monthName = dateObj.toLocaleString("default", { month: "long" })
    return monthName;
  }

  getDaysInMonth = () => {
    var now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }

  generateDays = () => {
    let days = [];
    let i = 1;
    let max_days = this.getDaysInMonth();
    while(max_days){
      days.push({
        id: i,
        isDone: false
      })
      max_days--;
      i++;
    }
    return days;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      return {
        activities: prevState.activities.concat({ activity: prevState.inputVal, month: this.getCurrentMonth(), days: this.generateDays() }),
      }
    }, () => {
      this.setState({
        inputVal: ''
      })
    })
  }

  changeDayStatus = (days, value) => {
    days = days.reduce((acc, curr) => {
      if(curr.id === Number(value)){
        curr.isDone = !curr.isDone;
        acc = acc.concat(curr);
      }else{
        acc = acc.concat(curr);
      }
      return acc;
    }, []);
    return days;
  }

  markDate = (activity, event) => {
    let arr = this.state.activities;
    let updatedArr = arr.reduce((acc, curr) => {
      if(curr.activity === activity.activity){
        curr.days = this.changeDayStatus(curr.days, event.target.innerText);
        acc = acc.concat(curr);
      }else{
        acc = acc.concat(curr);
      }
      return acc;
    }, []);
    this.setState((prevState) => {
      return {
        activities: updatedArr
      }
    })
  }

  deleteActivity = (activity) => {
    let arr = this.state.activities;
    let pos = arr.indexOf(activity);
    arr.splice(pos, 1);
    this.setState({
      activities: arr
    })
  }

  render(){
    return (
      <>
        <Header />
        <Form handleSubmit={this.handleSubmit} inputVal={this.state.inputVal} handleInput={this.handleInput} />
        <Main deleteActivity={this.deleteActivity} markDate={this.markDate} activityList={this.state.activities} />
      </>
    )
  }
}

export default App;