import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Breakdown extends Component {
  componentDidMount = () => {
    this.props.getCategories();
  };

  render() {
    let categories = this.props.categories;
    return (
      <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Category</th>
              <th>Total amount</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((c) => (
              <tr key={c.category}>
                <td>{c.category}</td>
                <td>{c.totalAmount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default Breakdown;
