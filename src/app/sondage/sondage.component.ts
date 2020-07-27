import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SondageService } from "../service/sondage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-sondage",
  templateUrl: "./sondage.component.html",
  styleUrls: ["./sondage.component.css"],
})
export class SondageComponent implements OnInit {
  sondageForm: FormGroup;
  constructor(private sondage: SondageService, private router: Router) {}

  ngOnInit(): void {
    this.sondageForm = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });
  }

  onSubmit() {
    this.sondage.createSondage(this.sondageForm.value).subscribe(() => {
      this.router.navigate(["/list-sondage"]);
    });
  }
}
