import { useEffect, useState } from "react";
import { Discipline } from "../model/discipline";
import { Card, Table, Input, Button, CardHeader } from "reactstrap";
import { DiciplineRepository } from "../repository/disciplineRepository";

export function Disciplina() {
  const [data, setData] = useState([]);
  const [discipline, setDiscipline] = useState("");
  const diciplineRepository = new DiciplineRepository();

  const handleAdd = () => {
    if (discipline) {
      diciplineRepository.add(
        new Discipline({
          name: discipline,
        })
      );

      setDiscipline("");
      getData();
    } else {
      alert("Preencha todo o form ?");
    }
  };

  const getData = () => {
    setData(diciplineRepository.getAll());
  };

  const handleDelete = (id) => {
    if (confirm("Pretende remover ?")) {
      diciplineRepository.remove(id);
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="row mb-4">
        <div className="col-4">
          <label className="mb-2">
            <b>Disciplina:</b>
          </label>
          <Input
            value={discipline}
            onChange={(e) => {
              setDiscipline(e.target.value);
            }}
            placeholder=""
          />
        </div>
        <div className="col-4 p-2">
          <Button onClick={handleAdd} className="mt-4">
            Adicionar
          </Button>
        </div>
      </div>
      <Card className="caixa">
        <CardHeader className="p-2 headTitle">
          <b className="title-p">Disciplinas</b>
        </CardHeader>
        <Table className="mb-0" striped>
          <thead>
            <tr className="containerP">
              <th>Nome</th>
              <th className="text-center">Opções</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ id, name }) => (
              <tr key={id}>
                <td>{name}</td>
                <td className="text-center">
                  <Button
                    className="btn-danger"
                    onClick={() => handleDelete(id)}
                  >
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
