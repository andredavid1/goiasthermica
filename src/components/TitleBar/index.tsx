import React from 'react';

import { Container } from './styles';

interface PropsTitleBar {
  title: string;
}

const TitleBar: React.FC<PropsTitleBar> = ({ title }: PropsTitleBar) => {
  return (
    <Container>
      <h2>{title}</h2>
    </Container>
  );
};

export default TitleBar;
