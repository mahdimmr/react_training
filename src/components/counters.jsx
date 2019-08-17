import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 6, value: 2 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleInc = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn-sm btn-primary m-2 btn"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters
          .sort((a, b) => b.id < a.id)
          .map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handleDelete}
              onInc={this.handleInc}
            />
          ))}
      </div>
    );
  }
}
