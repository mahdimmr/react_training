import React, { Component } from "react";

export default class Counetr extends Component {
  render() {
    return (
      <>
        <div>
          <span className="ml-3">
            <i>{this.props.counter.id}</i>
          </span>
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button
            className="btn btn-info btn-sm m-1"
            onClick={() => this.props.onInc(this.props.counter)}
          >
            ++
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge ml-4 mr-2 badge-pill badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? <span>Zero</span> : <span>{value}</span>;
  }
}
