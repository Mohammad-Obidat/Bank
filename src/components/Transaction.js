import React, { Component } from 'react';

export class Transaction extends Component {
  deleteTrans = async () => {
    await this.props.deleteTransaction(this.props.id);
  };

  render() {
    let props = this.props;
    return (
      <div id={props.id}>
        <span>{props.vendor}</span>
        <span>{props.category}</span>
        <button type='button' onClick={this.deleteTrans}>
          Delete
        </button>
      </div>
    );
  }
}

export default Transaction;
