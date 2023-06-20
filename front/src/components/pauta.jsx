import { Card, Table, Input, Button, CardHeader } from "reactstrap";
import Select from "react-select";

export function Pauta() {
  return (
    <>
      <div className="row mb-4">
        <div className="col-4">
          <label className="mb-2">
            <b>Disciplina:</b>
          </label>
          <Select placeholder="" />
        </div>
      </div>
      <Card className="caixa">
        <CardHeader className="p-2 headTitle">
          <b className="title-p">Lista Nominal</b>
        </CardHeader>
        <Table className="mb-0" striped>
          <thead>
            <tr className="containerP">
              <th>Nome Completo</th>
              <th style={{ width: 100 }}>Nota 1</th>
              <th style={{ width: 100 }}>Nota 2</th>
              <th className="text-center">Média</th>
              <th className="text-center">Situação</th>
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
              <td className="text-center">Aprovado</td>
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
              <td className="text-center">Aprovado</td>
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
              <td className="text-center">Aprovado</td>
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
              <td className="text-center">Aprovado</td>
            </tr>
          </tbody>
        </Table>
      </Card>
      <div className="mt-3">
        <Button color="warning">Salvar</Button>
      </div>
    </>
  );
}
