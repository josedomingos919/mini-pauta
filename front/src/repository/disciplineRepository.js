import { Db } from "../db";
import { Discipline } from "../model/discipline";

export class DiciplineRepository {
  constructor(db = new Db()) {
    this.db = db;
  }

  add(dicipline = new Discipline()) {
    const data = this.db.getData();

    if (data?.diciplines) data.diciplines.push(dicipline);
    else data.diciplines = [dicipline];

    this.db.save(data);
  }

  getAll() {
    const data = this.db.getData();

    return (
      data?.diciplines?.map((dicipline) => new Discipline(dicipline)) || []
    );
  }

  remove(id = "") {
    const data = this.db.getData();

    if (data?.diciplines) {
      data.diciplines = data.diciplines.filter((e) => e.id !== id);
    }

    this.db.save(data);
  }

  update(dicipline = new Discipline(), id = "") {
    const data = this.db.getData();

    if (data?.diciplines) {
      data.diciplines = data.diciplines.map((e) =>
        e.id == id ? dicipline : e
      );
    }

    this.db.save(data);
  }
}
