import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  toggled = true;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}
  toggle() {
    this.toggled = !this.toggled;
  }

  logout() {
    this.router.navigate(["/"]);
    this.auth.deleteToken();
  }
}
