import React, { Component } from 'react';

export class Transaction extends Component {
  render() {
    let props = this.props;
    return (
      <div id={props.id}>
        <span>{props.vendor}</span>
        <span>{props.category}</span>
        <button type='button'>Delete</button>
      </div>
    );
  }
}

export default Transaction;
