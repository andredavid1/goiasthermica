import { shade } from 'polished';
import React from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiEdit,
  FiPlayCircle,
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
      <h3>Serviços em andamento</h3>
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
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiCheckCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 2</td>
            <td>serviço 2</td>
            <td>08:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiCheckCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 3</td>
            <td>serviço 3</td>
            <td>09:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiCheckCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 4</td>
            <td>serviço 4</td>
            <td>10:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiCheckCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 5</td>
            <td>serviço 5</td>
            <td>11:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiCheckCircle color={shade(0.2, 'green')} />
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
      <h3>Serviços agendados</h3>
      <Scheduled>
        <thead>
          <tr>
            <th>Cliente</th>
            <th>Serviço</th>
            <th>Previsão</th>
            <th>{/* actions */}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cliente 6</td>
            <td>serviço 6</td>
            <td>13:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiPlayCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 7</td>
            <td>serviço 7</td>
            <td>14:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiPlayCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 8</td>
            <td>serviço 8</td>
            <td>15:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiPlayCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 9</td>
            <td>serviço 9</td>
            <td>16:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiPlayCircle color={shade(0.2, 'green')} />
            </td>
          </tr>
          <tr>
            <td>cliente 10</td>
            <td>serviço 10</td>
            <td>17:00</td>
            <td>
              <FiEdit color={shade(0.4, 'yellow')} />
              <FiPlayCircle color={shade(0.2, 'green')} />
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
