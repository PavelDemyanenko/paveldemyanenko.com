import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
