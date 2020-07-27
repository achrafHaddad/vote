import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { SondageService } from "../service/sondage.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-sondage",
  templateUrl: "./detail-sondage.component.html",
  styleUrls: ["./detail-sondage.component.css"],
})
export class DetailSondageComponent implements OnInit {
  id: string;
  sondageForm: FormGroup;
  constructor(
    private sondage: SondageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getOneSondage();
    this.sondageForm = new FormGroup({
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });
  }

  getOneSondage() {
    this.sondage.getOneSondage(this.id).subscribe((data) => {
      this.sondageForm.patchValue(data);
    });
  }

  onSubmit() {
    this.sondage.editSondage(this.sondageForm.value, this.id).subscribe(() => {
      this.router.navigate(["/list-sondage"]);
    });
  }
}
