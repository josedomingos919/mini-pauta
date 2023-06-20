export const IData = {
  students: [],
};

export class Db {
  save(data = IData) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem("data") || "{}") || [];
  }
}
