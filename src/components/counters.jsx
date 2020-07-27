import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, onDelete, onIncrement } = this.props; // object destructuring

    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          RESET
        </button>
        <br />
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
