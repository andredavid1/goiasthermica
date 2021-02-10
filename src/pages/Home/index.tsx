import React from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiEdit,
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
  Running,
  Scheduled,
  Table,
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
    <Table>
      <Running>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Serviço</th>
            <th>Início</th>
            <th>{/* actions */}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cliente 1</td>
            <td>serviço 1</td>
            <td>07:00</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>cliente 2</td>
            <td>serviço 2</td>
            <td>08:00</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>cliente 3</td>
            <td>serviço 3</td>
            <td>09:00</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>cliente 4</td>
            <td>serviço 4</td>
            <td>10:00</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>cliente 5</td>
            <td>serviço 5</td>
            <td>11:00</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <span>Mostrando 1 a 5 de um total de 10</span>
            </td>
          </tr>
        </tfoot>
      </Running>
    </Table>
    <Table>
      <Scheduled>
        <thead>
          <tr>
            <th>item 1</th>
            <th>item 2</th>
            <th>item 3</th>
            <th>item 4</th>
            <th>{/* actions */}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>valor 1</td>
            <td>Valor 2</td>
            <td>Valor 3</td>
            <td>Valor 4</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>valor 1</td>
            <td>Valor 2</td>
            <td>Valor 3</td>
            <td>Valor 4</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>valor 1</td>
            <td>Valor 2</td>
            <td>Valor 3</td>
            <td>Valor 4</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>valor 1</td>
            <td>Valor 2</td>
            <td>Valor 3</td>
            <td>Valor 4</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
          <tr>
            <td>valor 1</td>
            <td>Valor 2</td>
            <td>Valor 3</td>
            <td>Valor 4</td>
            <td>
              <FiEdit />
              <FiCheckCircle />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              <span>Mostrando 1 a 5 de um total de 10</span>
            </td>
          </tr>
        </tfoot>
      </Scheduled>
    </Table>
  </Container>
);

export default Home;
