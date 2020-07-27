import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  id: string;
  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post("http://localhost:3000/user/register", data);
  }

  login(data) {
    return this.http.post("http://localhost:3000/user/login", data);
  }

  getId() {
    const token = this.getToken();
    return (this.id = jwt_decode(token).data._id);
  }

  getToken() {
    const token = localStorage.getItem("token");
    if (token != undefined && token != null) return token;
    else return "";
  }

  deleteToken() {
    return localStorage.removeItem("token");
  }
}
