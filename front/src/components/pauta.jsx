import { Card, Table, Input, Button, CardHeader } from "reactstrap";
import { DiciplineRepository } from "../repository/disciplineRepository";
import { useEffect, useState } from "react";
import { StudentRepository } from "../repository/studentRepository";
import { PautaRepository } from "../repository/pautaRepository";
import { Pauta } from "./../model/pauta";

import Select from "react-select";

export function PautaScreen() {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [disciplines, setDisciplines] = useState([]);
  const [discipline, setDiscipline] = useState(null);

  const pautaRepository = new PautaRepository();
  const studentRepository = new StudentRepository();
  const diciplineRepository = new DiciplineRepository();

  useEffect(() => {
    if (data?.length) pautaRepository.save(data);
  }, [data]);

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

  const getPauta = () => {
    setData(pautaRepository.getAll());
  };

  useEffect(() => {
    getPauta();
    getStudents();
    getDiscipline();
  }, []);

  const getStudentPauta = (studentId) => {
    return data.find(
      (e) => e?.studentId == studentId && e?.disciplineId == discipline?.value
    );
  };

  const getNota1 = (studentId) => {
    const pauta = getStudentPauta(studentId, discipline);

    if (pauta?.nota1 >= 0 && pauta?.nota1 <= 20) return pauta?.nota1;
    else return undefined;
  };

  const getNota2 = (studentId) => {
    const pauta = getStudentPauta(studentId);

    if (pauta?.nota1 >= 0 && pauta?.nota1 <= 20) return pauta?.nota2;
    else return undefined;
  };

  const setNota1 = (id, value) => {
    const nota = data.find(
      (pauta) =>
        pauta?.studentId == id && pauta.disciplineId == discipline?.value
    );

    console.log(nota);

    if (!nota) {
      setData((state) => [
        ...state,
        new Pauta({
          disciplineId: discipline?.value,
          nota1: value,
          studentId: id,
        }),
      ]);

      return;
    }

    const response = data.map((pauta) => {
      if (pauta?.studentId == id && pauta.disciplineId == discipline?.value) {
        pauta.nota1 = value;

        return pauta;
      }

      return pauta;
    });

    setData(response);
  };

  const setNota2 = (id, value) => {
    const nota = data.find(
      (pauta) =>
        pauta?.studentId == id && pauta.disciplineId == discipline?.value
    );

    if (!nota) {
      setData((state) => [
        ...state,
        new Pauta({
          disciplineId: discipline?.value,
          nota2: value,
          studentId: id,
        }),
      ]);

      return;
    }

    const response = data.map((pauta) => {
      if (pauta?.studentId == id && pauta.disciplineId == discipline?.value) {
        pauta.nota2 = value;

        return pauta;
      }

      return pauta;
    });

    setData(response);
  };

  const getMedia = (id) => {
    const media = (parseFloat(getNota1(id)) + parseFloat(getNota2(id))) / 2;

    if (isNaN(media)) return undefined;

    return media;
  };

  const getResultado = (id) => {
    const media = getMedia(id);

    if (isNaN(media)) return "";

    if (media >= 10) {
      return Pauta.STATUS.APROVADO;
    } else {
      return Pauta.STATUS.REPROVADO;
    }
  };

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
          <tbody key={discipline?.value + "tetste"}>
            {students.map(({ id, name }) => (
              <tr>
                <td>{name}</td>
                <td>
                  <Input
                    min={0}
                    max={20}
                    maxLength={2}
                    type="number"
                    disabled={!discipline?.value}
                    value={getNota1(id)}
                    className="bold-input"
                    onChange={(e) => setNota1(id, e.target.value)}
                  />
                </td>
                <td>
                  <Input
                    min={0}
                    max={20}
                    maxLength={2}
                    type="number"
                    disabled={!discipline?.value}
                    value={getNota2(id)}
                    className="bold-input"
                    onChange={(e) => setNota2(id, e.target.value)}
                  />
                </td>
                <td className="text-center bold-input">{getMedia(id)}</td>
                <td className={"text-center"}>{getResultado(id)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </>
  );
}
