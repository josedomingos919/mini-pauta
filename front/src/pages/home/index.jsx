import {
  Card,
  Table,
  Input,
  Button,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import Select from "react-select";

import * as S from "./styles";

export const HomePage = () => {
  return (
    <S.Container>
      <b className="mb-4">Mini-Pauta</b>
      <S.Body>
        <Nav tabs className="mb-4">
          <NavItem>
            <NavLink href="#" active>
              Pauta
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Disciplina</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Aluno</NavLink>
          </NavItem>
        </Nav>
        <div className="row mb-4">
          <div className="col-4">
            <label className="mb-2">
              <b>Disciplina:</b>
            </label>
            <Select placeholder="" />
          </div>
        </div>
        <Card>
          <CardHeader className="p-2">
            <b className="title-p">Lista Nominal</b>
          </CardHeader>
          <Table className="mb-0" striped>
            <thead>
              <tr>
                <th>Nome Completo</th>
                <th style={{ width: 100 }}>Nota 1</th>
                <th style={{ width: 100 }}>Nota 2</th>
                <th className="text-center">Média</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>José Domingos Cassua N'donge</td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td className="text-center bold-input">20.5</td>
              </tr>
              <tr>
                <td>José Domingos Cassua N'donge</td>
                <td>
                  <Input max={20} min={0} className="bold-input" />
                </td>
                <td>
                  <Input max={20} min={0} className="bold-input" />
                </td>
                <td className="text-center bold-input">20.5</td>
              </tr>
              <tr>
                <td>José Domingos Cassua N'donge</td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td className="text-center bold-input">20.5</td>
              </tr>
              <tr>
                <td>José Domingos Cassua N'donge</td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td className="text-center bold-input">20.5</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <div className="mt-3">
          <Button color="primary">Salvar</Button>
        </div>
      </S.Body>
    </S.Container>
  );
};
