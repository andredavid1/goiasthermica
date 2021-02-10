import React from 'react';
import {
  FiAlertCircle,
  FiPlusCircle,
  FiPrinter,
  FiXCircle,
} from 'react-icons/fi';
import TitleBar from '../../components/TitleBar';

import {
  Container,
  ActionsBar,
  ButtonsContainer,
  Button,
  BtnIcon,
  BtnText,
  SearchContainer,
  InputSearchContainer,
  ButtonSearchContainer,
} from './styles';

const Home: React.FC = () => (
  <Container>
    <ActionsBar>
      <ButtonsContainer>
        <Button type="button">
          <BtnIcon>
            <FiPlusCircle />
          </BtnIcon>
          <BtnText>Novo</BtnText>
        </Button>
        <Button type="button">
          <BtnIcon>
            <FiPrinter />
          </BtnIcon>
          <BtnText>Imprimir</BtnText>
        </Button>
        <Button type="button">
          <BtnIcon>
            <FiAlertCircle />
          </BtnIcon>
          <BtnText>Teste</BtnText>
        </Button>
      </ButtonsContainer>
      <SearchContainer>
        <InputSearchContainer>
          <input type="text" name="search" placeholder="pesquisar" />
        </InputSearchContainer>
        <ButtonSearchContainer>
          <button type="button">
            <FiXCircle />
          </button>
        </ButtonSearchContainer>
      </SearchContainer>
    </ActionsBar>
    <TitleBar title="Ordens de Serviço" />
  </Container>
);

export default Home;
