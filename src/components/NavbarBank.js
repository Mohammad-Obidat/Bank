import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export class NavbarBank extends Component {
  componentDidUpdate = () => {
    this.props.getTotalBalance();
  };

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Container>
            <Nav.Link as={Link} to='/'>
              Bank
            </Nav.Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Nav.Link as={Link} to='/'>
                  Transactions
                </Nav.Link>

                <Nav.Link as={Link} to='/operation'>
                  Operations
                </Nav.Link>

                <Nav.Link as={Link} to='/breakdown'>
                  Breakdown
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>Balance ${this.props.totalBalance}</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default NavbarBank;
