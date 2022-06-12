import React, { Component } from 'react';

export class Operations extends Component {
  render() {
    return (
      <>
        <input type='number' placeholder='Enter the amount' /> <br />
        <input type='text' placeholder='Enter the vendor' /> <br />
        <input type='text' placeholder='Enter the category' /> <br />
        <button>Deposit</button>
        <button>Withdraw</button>
      </>
    );
  }
}

export default Operations;
