import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaSnowflake } from 'react-icons/fa';

import { Container } from './styles';

const Header: React.FC = () => (
  <Container>
    <nav>
      <label htmlFor="check" className="checkbtn">
        <FiMenu />
      </label>
      <input type="checkbox" id="check" />
      <label className="logo">
        <FaSnowflake size={24} />
        <Link to="/">Goiás Thérmica</Link>
      </label>
      <ul>
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/">OrderSys</Link>
        </li>
        <li>
          <Link to="/">page2</Link>
        </li>
        <li>
          <Link to="/">page3</Link>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Header;
