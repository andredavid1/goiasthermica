import styled from 'styled-components';

export const Container = styled.header`
  max-width: 97.2rem;
  margin: 0 auto;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #0082e6;
    height: 6rem;
    width: 100%;

    .brand {
      width: 50%;
      height: 100%;

      label.logo {
        display: flex;
        align-items: center;

        color: white;
        font-size: 1.6rem;
        line-height: 6rem;
        font-weight: bold;
        transition: font-size 0.5s;

        @media (min-width: 576px) {
          font-size: 2.4rem;
        }

        > svg {
          margin: 0 1rem;
        }
      }
    }

    .menu {
      width: 50%;
      height: 100%;

      .checkbtn {
        display: block;
        color: white;
        font-size: 30px;
        float: right;
        line-height: 6rem;
        margin-right: 40px;
        cursor: pointer;

        @media (min-width: 576px) {
          display: none;
        }
      }

      #check {
        display: none;

        &:checked ~ ul {
          left: 0;
        }
      }

      ul {
        position: fixed;
        width: 100%;
        height: calc(100vh - 10rem);
        background: #2c3e50;
        top: 6rem;
        left: -100%;
        text-align: center;
        transition: left 0.4s;

        @media (min-width: 576px) {
          background: #0082e6;
          float: right;
          margin-right: 2px;
          position: initial;
          height: 100%;
          margin: 0;
        }

        li {
          display: block;
          margin: 50px 0;
          line-height: 30px;

          @media (min-width: 576px) {
            display: inline-block;
            line-height: 6rem;
            margin: 0 2px;
          }

          a {
            font-size: 1.8rem;
            text-decoration: none;
            color: #fff;

            &.active,
            &:hover {
              background: none;
              color: #0082e6;
              text-decoration: underline;

              @media (min-width: 576px) {
                background: #1b9bff;
                color: #fff;
                transition: 0.5s;
              }
            }

            @media (min-width: 576px) {
              font-size: 1.6rem;
              padding: 7px 13px;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }
`;
