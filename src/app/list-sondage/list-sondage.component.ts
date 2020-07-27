import { Component, OnInit } from "@angular/core";
import { SondageService } from "../service/sondage.service";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-list-sondage",
  templateUrl: "./list-sondage.component.html",
  styleUrls: ["./list-sondage.component.css"],
})
export class ListSondageComponent implements OnInit {
  list: any;
  idUser: string;
  edit = true;
  constructor(
    private sondage: SondageService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idUser = this.auth.getId();
    this.getAllSondage();
  }

  getAllSondage() {
    this.sondage.getAllSondage().subscribe((data) => {
      this.list = data;
    });
  }

  toEdit(user, id) {
    if (this.idUser == user) this.router.navigate(["/edit", id]);
    else alert("Unauthorized");
  }
}
