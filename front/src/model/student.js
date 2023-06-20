export class Student {
  id = "";
  name = "";
  lastName = "";

  constructor({ id = new Date().getTime(), name = "", lastName = "" }) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
  }
}
