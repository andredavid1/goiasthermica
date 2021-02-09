/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaSnowflake } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <nav>
      <div className="brand">
        <label className="logo">
          <FaSnowflake />
          Goiás Thérmica
        </label>
      </div>

      <div className="menu">
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FiMenu />
        </label>

        <ul>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
        </ul>
      </div>
    </nav>
  </Container>
);

export default Header;
