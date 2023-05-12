import React, { Component } from 'react'

export default class FromDemo1 extends Component {
  state = {username:'', city:''}
  onChangeHandler=(event)=>{
    //this.setState({userName: event.target.value})
    let name = event.target.name;
    let value = event.target.value;
    this.setState({[name]:value});
  }
  onSubmitHandler = (event)=>{
    event.preventDefault();
    alert(this.state.userName);
  }
  render(){
    return(
      <>
      <form onSubmit={this.onSubmitHandler} >
      <h3>username:</h3>

<input type="text" name="userName" onChange={this.onChangeHandler}></input>
  <h3>username: {this.state.userName}</h3>


  <h3>city:</h3>
<input type="text" name="city" onChange={this.onChangeHandler}></input>
<h3>city is: {this.state.city}</h3>
  <input type="submit" value="Save"></input>
  </form>
      </>
    )
  }
}
