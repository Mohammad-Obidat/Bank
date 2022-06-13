import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Transaction from './Transaction';

export class Transactions extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {this.props.transactions.map((t) => {
              return (
                <Col lg={4}>
                  <Transaction
                    key={t.id}
                    id={t.id}
                    vendor={t.vendor}
                    category={t.category}
                    amount={t.amount}
                    deleteTransaction={this.props.deleteTransaction}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}

export default Transactions;
