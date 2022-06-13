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
            <Link className='reactLink' to='/'>
              <Navbar.Brand href='/'>Bank</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto'>
                <Link className='reactLink' to='/'>
                  <Nav.Link href='/'>Transactions</Nav.Link>
                </Link>

                <Link className='reactLink' to='/operation'>
                  <Nav.Link href='/operation'>Operations</Nav.Link>
                </Link>
                <Link className='reactLink' to='/breakdown'>
                  <Nav.Link href='/breakdown'>Breakdown</Nav.Link>
                </Link>
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
