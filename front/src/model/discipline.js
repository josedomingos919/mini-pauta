export class Discipline {
  id = "";
  name = "";
  constructor({ id = new Date().getTime(), name = "" }) {
    this.id = id;
    this.name = name;
  }
}
