import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import notify from './Toasts';

export class Transaction extends Component {
  deleteTrans = () => {
    notify('Deleted successfully!');
    this.props.deleteTransaction(this.props.id);
  };

  render() {
    let props = this.props;
    return (
      <>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>{props.vendor}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Category - {props.category}</p>
            <p>Amount: ${props.amount}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant='danger' type='button' onClick={this.deleteTrans}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </>
    );
  }
}

export default Transaction;
