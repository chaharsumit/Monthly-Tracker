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
    let max_days = this.getDaysInMonth();
    while(max_days){
      days.push({
        id: max_days - (max_days - 1),
        isDone: false
      })
      max_days--;
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

  markDate = () => {
    console.log('puta');
  }

  render(){
    let days = this.getDaysInMonth();
    let month = this.getCurrentMonth();
    return (
      <>
        <Header />
        <Form handleSubmit={this.handleSubmit} inputVal={this.state.inputVal} handleInput={this.handleInput} />
        <Main markDate={this.markDate} activityList={this.state.activities} />
      </>
    )
  }
}

export default App;