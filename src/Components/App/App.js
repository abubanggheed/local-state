import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     user: 'Eli',
  //   }
  //   this.handleChange = this.handleChange.bind(this);
  // }
  state = {
    user: { name: 'Eli', city: 'Minneapolis' },
  }

  handleChange = (event) => {
    this.setState({
      user: {
        name: event.target.value,
        city: this.state.user.city
      }
    });
  }
  handleCityChange = (event) => {
    this.setState({
      user: {
        city: event.target.value,
        name: this.state.user.name
      }
    });
  }
  handleClick = () => {
    console.log(this.state.user);
  }
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <p>{this.state.user.name}</p>
        <br />
        <input value={this.state.user.name} onChange={this.handleChange} />
        <br />
        <input value={this.state.user.city} onChange={this.handleCityChange} />
        <p>{this.state.user.name} is from {this.state.user.city}</p>
        <button onClick={this.handleClick}>Log</button>
      </div>
    );
  }
}

export default App;
