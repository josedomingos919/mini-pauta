import { Db } from "../db";
import { Student } from "../model/student";

export class StudentRepository {
  constructor(db = new Db()) {
    this.db = db;
  }

  add(student = new Student()) {
    const data = this.db.getData();

    if (data?.students) data.students.push(student);
    else data.students = [student];

    this.db.save(data);
  }

  getAll() {
    const data = this.db.getData();

    return data?.students?.map((student) => new Student(student)) || [];
  }

  remove(id = "") {
    const data = this.db.getData();

    if (data?.students) {
      data.students = data.students.filter((e) => e.id !== id);
    }

    this.db.save(data);
  }

  update(student = new Student(), id = "") {
    const data = this.db.getData();

    if (data?.students) {
      data.students = data.students.map((e) => (e.id == id ? student : e));
    }

    this.db.save(data);
  }
}
