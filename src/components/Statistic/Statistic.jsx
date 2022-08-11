import React, {Component} from 'react';
import {Buttons, Heading1, Text} from "../../Styles";

class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      bad: 0,
      neutral: 0
    }
  }

  handleAddGood() {
    this.setState((state) => {
      return {good: state.good + 1}
    })
  }

  handleAddNeutral() {
    this.setState((state) => {
      return {neutral: state.neutral + 1}
    })
  }

  handleAddBad() {
    this.setState((state) => {
      return {bad: state.bad + 1}
    })
  };

  countPercentage() {
    const total = this.state.good + this.state.neutral + this.state.bad
    const percentage = this.state.good / total * 100
    return Math.round(percentage)
  }

  render() {
    const totalCount = this.state.good + this.state.neutral + this.state.bad
    return (
      <div>
        <Heading1>Please left feedback</Heading1>
        <Buttons>
          <button onClick={() => this.handleAddGood()}>Good</button>
          <button onClick={() => this.handleAddNeutral()}>Neutral</button>
          <button onClick={() => this.handleAddBad()}>Bad</button>
        </Buttons>
        <div>
          <Heading1>Statistic</Heading1>
          {totalCount ?
            <>
              <Text>Good: {this.state.good}</Text>
              <Text>Neutral: {this.state.neutral}</Text>
              <Text>Bad: {this.state.bad}</Text>
              <Text>Total: {totalCount}</Text>
              <Text>Positive feedback: {this.countPercentage()}%</Text>
            </>
            :
            <p>No given feedback</p>}
        </div>
      </div>
    );
  }
}

export default Statistic;
