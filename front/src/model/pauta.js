export class Pauta {
  static STATUS = {
    APROVADO: "",
    REPROVADO: "",
    RECURSO: "",
  };

  id = "";
  studentId = "";
  nota1 = 0;
  nota2 = 0;
  media = 0;
  result = "";

  constructor({ id = new Date().getTime(), name = "" }) {
    this.id = id;
    this.name = name;
  }
}
