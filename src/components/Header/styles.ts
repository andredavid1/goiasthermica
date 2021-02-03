import styled from 'styled-components';

export const Container = styled.header`
  max-width: 97.2rem;
  margin: 0 auto;

  nav {
    background: #0082e6;
    height: 6rem;
    width: 100%;
  }

  label.logo {
    font-size: 2.4rem;
    line-height: 6rem;
    padding: 0 0.5rem;
    padding-right: 1rem;
    font-weight: bold;

    svg {
      color: #fff;
    }
  }

  label.logo a {
    color: white;
    text-decoration: none;
  }

  nav ul {
    float: right;
    margin-right: 2rem;
  }

  nav ul li {
    display: inline-block;
    line-height: 6rem;
    margin: 0 0.5rem;
  }

  nav ul li a {
    color: white;
    font-size: 1.7rem;
    padding: 0.7rem 1.3rem;
    border-radius: 0.3rem;
    text-transform: uppercase;
    text-decoration: none;
  }

  nav ul li a.active,
  nav ul li a:hover {
    color: #2a337f;
    transition: 0.3s;
  }

  .checkbtn {
    padding-top: 0.5rem;
    font-size: 3rem;
    color: white;
    float: right;
    line-height: 6rem;
    margin-right: 4rem;
    cursor: pointer;
    display: none;
  }

  #check {
    display: none;
  }

  @media (max-width: 97.2rem) {
    label.logo {
      font-size: 2.4rem;
    }
    nav ul li a {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 60rem) {
    .checkbtn {
      display: block;
    }

    ul {
      position: fixed;
      width: 100%;
      height: calc(100vh - 10rem);
      background: #2c3e50;
      top: 6rem;
      left: -100%;
      text-align: center;
      transition: all 0.5s;
    }

    nav ul li {
      display: block;
      margin: 5rem 0;
      line-height: 3rem;
    }

    nav ul li a {
      font-size: 2rem;
    }

    nav ul li a:hover,
    nav ul li a.active {
      background: none;
      color: #0082e6;
    }

    #check:checked ~ ul {
      left: 0;
    }
  }
`;
