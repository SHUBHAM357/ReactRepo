import { createStore } from 'redux'
import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import debounce from 'lodash.debounce';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        name:'shubham'
    }
  }

  componentDidMount() {
    axios.post(`http://192.168.43.123:9003/getData`,'shubham')
      .then(res => {
        const username = res.data;
        this.setState({ username });
      }).catch((err)=>{
        console.log("Error occured ::: "+err);
      })
  }

  // componentDidMount(){
  //   this.props.subscribe(()=>{
  //       // console.log('counter', store.getState().defaultState);
  //        this.setState({});
  //   }
  //   );
  // }

  increment = () => {
    this.props.dispatch(actions.incrementCounter());
  }

  decrement = () => {
    this.props.dispatch(actions.decrementCounter());
  }

  changeToINR = () => {
    this.props.dispatch(actions.changeToINR());
  }

  changeToUSD = () => {
    this.props.dispatch(actions.changeToUSD());
  }

  onChangeInput = (event) =>{
        console.log("Input Data : "+ event.target.value);
  }

  render() {

    console.log('In rendor() method');

    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <p>{this.props.defaultState}</p>
        <p>{this.props.name}</p>
        <button onClick={this.changeToINR}>INR</button>
        <button onClick={this.changeToUSD}>USD</button>
        <p>Currency Value :: {this.props.defaultCharge}</p>

        <input type="text" onChange={debounce(this.onChangeInput,350)}/>

      </div>
    )
  }
}

// store.subscribe(function () {
//   console.log('counter', store.getState());
// })

export default connect((state,props) =>{  
  return {
    defaultState : state.amount.defaultState,
    name : state.amount.name,
    defaultCharge :state.charge.defaultCharge
  };

})(App);


