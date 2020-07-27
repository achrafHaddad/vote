import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SondageService {
  constructor(private http: HttpClient) {}

  createSondage(data) {
    return this.http.post("http://localhost:3000/sondage/create", data);
  }

  getOneSondage(id) {
    return this.http.get(`http://localhost:3000/sondage/${id}`);
  }

  getAllSondage() {
    return this.http.get(`http://localhost:3000/sondage`);
  }

  vote(choice, id) {
    return this.http.put(`http://localhost:3000/sondage/vote/${id}`, choice);
  }

  editSondage(data, id) {
    return this.http.put(`http://localhost:3000/sondage/edit/${id}`, data);
  }

  deleteSondage(id) {
    return this.http.delete(`http://localhost:3000/sondage/delete/${id}`);
  }
}
