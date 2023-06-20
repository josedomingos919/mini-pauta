import { useEffect, useState } from "react";
import { Card, Table, Input, Button, CardHeader } from "reactstrap";
import { StudentRepository } from "../repository/studentRepository";
import { Student } from "../model/student";

export function Students() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [lastName, setLastName] = useState("");
  const studentRepository = new StudentRepository();

  const handleAdd = () => {
    if (!name || !lastName) return alert("Preencha os campos");

    const student = new Student({ name, lastName });

    studentRepository.add(student);

    setLastName("");
    setName("");
    handleGetData();
  };

  const handleGetData = () => {
    setData(studentRepository.getAll());
  };

  const handleDelete = (id) => {
    if (confirm("Pretende remover ?")) {
      studentRepository.remove(id);
      handleGetData();
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return (
    <>
      <div className="row mb-4">
        <div className="col-4">
          <label className="mb-2">
            <b>Nome:</b>
          </label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="col-4">
          <label className="mb-2">
            <b>Sobrenome:</b>
          </label>
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder=""
          />
        </div>
        <div className="col-4 pt-2">
          <Button onClick={handleAdd} color="primary mt-4">
            Adicionar
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="p-2">
          <b className="title-p">Alunos</b>
        </CardHeader>
        <Table className="mb-0" striped>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, lastName, id }) => (
              <tr>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>
                  <Button onClick={() => handleDelete(id)} color="danger">
                    Remover
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
