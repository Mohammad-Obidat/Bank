import axios from 'axios';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Breakdown from './components/Breakdown';
import NavbarBank from './components/NavbarBank';
import Operations from './components/Operations';
import Transactions from './components/Transactions';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      categories: [],
      totalBalance: 0,
    };
  }

  getTransactions = async () => {
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

  getCategories = async () => {
    let categories = await axios.get(`http://localhost:5000/breakdown`);

    this.setState({
      categories: categories.data.map((t) => {
        return {
          category: t._id,
          totalAmount: t.amount,
        };
      }),
    });
  };

  getTotalBalance = async () => {
    let totalBalance = await axios.get(`http://localhost:5000/totalBalance`);
    this.setState({
      totalBalance: totalBalance.data.map((t) => t.totalBalance)[0],
    });
  };

  componentDidMount = () => {
    this.getTransactions();
  };

  deleteTransaction = async (transactionId) => {
    await axios.delete(`http://localhost:5000/transaction/${transactionId}`);
    this.getTransactions();
  };

  addOperation = async (transactionDetails) => {
    await axios.post(`http://localhost:5000/operation`, transactionDetails);
    this.getTransactions();
  };

  render() {
    return (
      <Router>
        <>
          <NavbarBank
            totalBalance={this.state.totalBalance}
            getTotalBalance={this.getTotalBalance}
          />

          <div id='routeDiv'>
            <Route
              exact
              path='/'
              render={() => (
                <Transactions
                  transactions={this.state.transactions}
                  deleteTransaction={this.deleteTransaction}
                />
              )}
            />

            <Route
              exact
              path='/operation'
              render={() => <Operations addOperation={this.addOperation} />}
            />

            <Route
              exact
              path='/breakdown'
              render={() => (
                <Breakdown
                  categories={this.state.categories}
                  getCategories={this.getCategories}
                  getTotalBalance={this.getTotalBalance}
                />
              )}
            />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
