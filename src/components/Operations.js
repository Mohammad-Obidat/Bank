import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { InputGroup, FormControl } from 'react-bootstrap';

export class Operations extends Component {
  constructor() {
    super();
    this.transactionDetails = {};
  }

  handleInput = (event) => {
    let value = event.target.value;
    let key = event.target.name;

    this.transactionDetails[key] = value;
  };

  addNewOperation = async () => {
    await this.props.addOperation(this.transactionDetails);
    this.props.history.replace('/');
  };

  denay = async () => {
    this.transactionDetails.amount = -this.transactionDetails.amount;
    await this.props.addOperation(this.transactionDetails);
    this.props.history.replace('/');
  };

  render() {
    return (
      <>
        <InputGroup className='mb-3'>
          <InputGroup.Text>$</InputGroup.Text>
          <FormControl
            type='number'
            aria-label='Amount (to the nearest dollar)'
            placeholder='Enter the amount'
            name='amount'
            onChange={this.handleInput}
            required
          />
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>Vendor</InputGroup.Text>
          <FormControl
            type='text'
            placeholder='Enter the vendor'
            name='vendor'
            onChange={this.handleInput}
            aria-label='Username'
            aria-describedby='basic-addon1'
            required
          />
        </InputGroup>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>Gategory</InputGroup.Text>
          <FormControl
            aria-label='Username'
            aria-describedby='basic-addon1'
            type='text'
            placeholder='Enter the category'
            name='category'
            onChange={this.handleInput}
            required
          />
        </InputGroup>
        <Button variant='success' type='submit' onClick={this.addNewOperation}>
          Deposit
        </Button>{' '}
        <Button variant='danger' type='button' onClick={this.denay}>
          Withdraw
        </Button>
      </>
    );
  }
}

export default withRouter(Operations);
