import React, { Component } from 'react';
import Transaction from './Transaction';

export class Transactions extends Component {
  render() {
    return (
      <>
        {this.props.transactions.map((t) => {
          return (
            <Transaction
              key={t.id}
              id={t.id}
              vendor={t.vendor}
              category={t.category}
            />
          );
        })}
      </>
    );
  }
}

export default Transactions;
