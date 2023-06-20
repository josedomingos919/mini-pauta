import { Db } from "../db";
import { Pauta } from "../model/pauta";

export class PautaRepository {
  constructor(db = new Db()) {
    this.db = db;
  }

  add(pauta = new Pauta()) {
    const data = this.db.getData();

    if (data?.pautas) data.pautas.push(pauta);
    else data.pautas = [pauta];

    this.db.save(data);
  }

  getAll() {
    const data = this.db.getData();

    return data?.pautas?.map((pauta) => new Pauta(pauta)) || [];
  }

  remove(id = "") {
    const data = this.db.getData();

    if (data?.pautas) {
      data.pautas = data.pautas.filter((e) => e.id !== id);
    }

    this.db.save(data);
  }

  save(pautas = []) {
    const data = this.db.getData();
    data.pautas = pautas;
    this.db.save(data);
  }

  update(pauta = new Pauta(), id = "") {
    const data = this.db.getData();

    if (data?.pautas) {
      data.pautas = data.pautas.map((e) => (e.id == id ? pauta : e));
    }

    this.db.save(data);
  }
}
