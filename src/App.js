import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  };
  CountUp = () => {
    // this.setState({count: this.state.count + 1});
    this.setState(current => ({count: current.count + 1}));
  };
  CountDown = () => {
    // this.setState({count: this.state.count - 1});
    this.setState(current => ({count: current.count - 1}));
  };
  render() {
    return (
      <div>
        <h1>Class Component. count = {this.state.count} </h1>
        <button onClick={this.CountUp}>Count Up</button>
        <button onClick={this.CountDown}>Count Down</button>
      </div>
    );
  }
}

export default App;
