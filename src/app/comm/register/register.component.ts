import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "src/app/service/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerform: FormGroup;
  hide = true;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerform = new FormGroup({
      name: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9_.+-]+$"),
        Validators.minLength(8),
      ]),
    });
  }

  register() {
    this.auth.register(this.registerform.value).subscribe(
      () => {
        this.router.navigate(["/"]);
      },
      (err) => {
        alert(err.error.message);
      }
    );
  }
}
