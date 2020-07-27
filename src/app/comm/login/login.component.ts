import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  hide = true;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    });
  }

  login() {
    this.auth.login(this.LoginForm.value).subscribe(
      (res: { token: string }) => {
        localStorage.setItem("token", res.token);
        this.router.navigate(["/list-sondage"]);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
