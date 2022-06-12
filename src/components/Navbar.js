import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Transactions</Link>
        <Link to='/operations'>Operations</Link>
        Balance
      </div>
    );
  }
}

export default Navbar;
