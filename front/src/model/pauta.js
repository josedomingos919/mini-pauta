export class Pauta {
  static STATUS = {
    APROVADO: "Aprovado",
    REPROVADO: "Reprovado",
  };

  id = "";
  studentId = "";
  disciplineId = "";
  nota1 = 0;
  nota2 = 0;
  media = 0;
  result = "";

  constructor({
    id = new Date().getTime(),
    studentId = "",
    disciplineId = "",
    nota1 = 0,
    nota2 = 0,
    media = 0,
    result = "",
  }) {
    this.id = id;
    this.studentId = studentId;
    this.disciplineId = disciplineId;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.media = media;
    this.result = result;
  }
}
