import styled from 'styled-components';
import { lighten, shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  max-width: 97.2rem;
  min-height: calc(100vh - 10rem);
  width: 100%;
`;

export const ActionsBar = styled.section`
  align-items: center;
  border-bottom: 2px solid #222;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  margin: 0 0 0.4rem 0;

  @media (min-width: 576px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  align-items: center;
  border: 1px solid #323;
  border-radius: 0.3rem;
  display: flex;
  height: 2.5rem;
  justify-content: center;
  margin-right: 1rem;
  outline: none;
`;

export const BtnIcon = styled.span`
  align-items: center;
  background-color: ${shade(0.3, '#0082e6')};
  border-bottom-left-radius: 0.3rem;
  border-top-left-radius: 0.3rem;
  color: #fff;
  display: none;
  font-size: 1.8rem;
  height: 100%;
  padding: 0 0.4rem;

  @media (min-width: 576px) {
    display: flex;
  }
`;

export const BtnText = styled.span`
  align-items: center;
  background-color: #0082e6;
  border-bottom-right-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  color: #fff;
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  height: 100%;
  padding: 0 0.6rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin: 0.4rem 0 0 0;
  border: 1px solid #222;
  border-radius: 0.4rem;

  @media (min-width: 576px) {
    margin: 0;
    max-width: 200px;
  }
`;

export const InputSearchContainer = styled.div`
  width: 90%;
  background-color: #fff;
  height: 100%;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;

  input {
    border: none;
    outline: none;
    background: none;
    color: #222;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    width: 100%;
    height: 100%;
    padding: 0 0.4rem;
    font-size: 1.6rem;
  }
`;

export const ButtonSearchContainer = styled.div`
  background-color: #fff;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  height: 100%;
  width: 10%;

  > button {
    border: none;
    background: none;
    color: #e61700;
    outline: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 20px;

      @media (min-width: 576px) {
        font-size: 30px;
      }
    }
  }
`;

export const Table = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 1rem 0;
  flex-direction: column;

  h3 {
    width: 90%;
    margin: 0.5rem auto;
    color: #333;
  }
`;

export const Running = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto;

  td,
  th {
    border: 1px solid #222;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding: 1rem 0;
    background-color: #0082e6;
    color: white;
    font-size: 1.2rem;
  }

  td {
    font-size: 1.4rem;

    > button {
      background-color: none;
      border: none;
      cursor: pointer;
      outline: none;
      transition: color 0.4s;

      > svg {
        font-size: 2rem;
      }

      &.success {
        color: green;

        &:hover {
          color: ${shade(0.3, 'green')};
        }
      }

      &.warning {
        color: yellow;

        &:hover {
          color: ${shade(0.3, 'yellow')};
        }
      }

      &.danger {
        color: red;

        &:hover {
          color: ${shade(0.3, 'red')};
        }
      }
    }
  }
`;

export const Scheduled = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 0 auto;

  td,
  th {
    border: 1px solid #222;
    text-align: center;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  th {
    padding: 1rem 0;
    background-color: ${lighten(0.15, '#e61700')};
    color: white;
    font-size: 1.2rem;
  }

  td {
    font-size: 1.4rem;

    > button {
      background-color: none;
      border: none;
      cursor: pointer;
      outline: none;
      transition: color 0.4s;

      > svg {
        font-size: 2rem;
      }

      &.success {
        color: green;

        &:hover {
          color: ${shade(0.5, 'green')};
        }
      }

      &.warning {
        color: yellow;

        &:hover {
          color: ${shade(0.3, 'yellow')};
        }
      }

      &.danger {
        color: red;

        &:hover {
          color: ${shade(0.3, 'red')};
        }
      }
    }
  }
`;
