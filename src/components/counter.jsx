import React, { Component } from "react";
import { relative } from "upath";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value
  //   //    tags: ["tag1", "tag2", "tag3"]
  // };

  // No child state in single source of truth

  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br />
        {/* {this.state.tags.length === 0 ? (
          <p>There are no tags</p>
        ) : (
          <ul>
            {this.state.tags.map(tag => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
