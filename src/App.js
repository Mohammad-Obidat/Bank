import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Operations from './components/Operations';
import Transactions from './components/Transactions';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  componentDidMount = async () => {
    let transactions = await axios.get(`http://localhost:5000`);

    this.setState({
      transactions: transactions.data.map((t) => {
        return {
          id: t._id,
          amount: t.amount,
          vendor: t.vendor,
          category: t.category,
        };
      }),
    });
  };

  render() {
    return (
      <Router>
        <>
          <Navbar />
          <hr />
          <Route
            exact
            path='/'
            render={() => (
              <Transactions transactions={this.state.transactions} />
            )}
          />

          <Route exact path='/operations' render={() => <Operations />} />
        </>
      </Router>
    );
  }
}

export default App;
