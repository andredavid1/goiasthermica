import React from 'react';
import { FiAlertOctagon } from 'react-icons/fi';

import { Container } from './styles';

const NotFound: React.FC = () => (
  <Container>
    <FiAlertOctagon />
    <span>Página não encontrada</span>
  </Container>
);

export default NotFound;
