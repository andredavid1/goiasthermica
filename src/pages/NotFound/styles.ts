import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  min-height: calc(100vh - 10rem);
  max-width: 97.2rem;
  width: 100%;
  margin: 0 auto;

  > svg {
    margin-right: 0.5rem;
    font-size: 2.4rem;
    color: ${shade(0.2, '#f00')};
  }

  span {
    margin-left: 0.5rem;
    font-size: 2.4rem;
    color: #222;
  }
`;
