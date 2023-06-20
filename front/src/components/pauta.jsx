import { Card, Table, Input, Button, CardHeader } from "reactstrap";
import { DiciplineRepository } from "../repository/disciplineRepository";

import Select from "react-select";
import { useEffect, useState } from "react";
import { StudentRepository } from "../repository/studentRepository";

export function Pauta() {
  const [students, setStudents] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [discipline, setDiscipline] = useState(null);

  const studentRepository = new StudentRepository();
  const diciplineRepository = new DiciplineRepository();

  const getDiscipline = () => {
    setDisciplines(
      diciplineRepository
        .getAll()
        .map((e) => ({ ...e, label: e.name, value: e.id }))
    );
  };

  const getStudents = () => {
    setStudents(studentRepository.getAll());
  };

  useEffect(() => {
    getStudents();
    getDiscipline();
  }, []);

  return (
    <>
      <div className="row mb-4">
        <div className="col-4">
          <label className="mb-2">
            <b>Disciplina:</b>
          </label>
          <Select
            placeholder=""
            options={disciplines}
            onChange={(value) => setDiscipline(value)}
          />
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
            {students.map(({ id, name }) => (
              <tr>
                <td>{name}</td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td>
                  <Input className="bold-input" />
                </td>
                <td className="text-center bold-input">20.5</td>
                <td className="text-center">Aprovado</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <div className="mt-3">
        <Button color="warning">Salvar</Button>
      </div>
    </>
  );
}
