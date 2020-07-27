import { Component, OnInit } from "@angular/core";
import { SondageService } from "../service/sondage.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-vote-sondage",
  templateUrl: "./vote-sondage.component.html",
  styleUrls: ["./vote-sondage.component.css"],
})
export class VoteSondageComponent implements OnInit {
  id: string;
  // voteForm: FormGroup;
  voteSondage;
  choice: string;
  constructor(
    private sondage: SondageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getOneSondage();
    // this.voteForm = new FormGroup({
    //   choice: new FormControl(""),
    // });
  }

  getOneSondage() {
    this.sondage
      .getOneSondage(this.id)
      .subscribe((data: { title; description }) => {
        this.voteSondage = data;
      });
  }

  vote() {
    this.sondage.vote({ choice: this.choice }, this.id).subscribe(() => {
      this.router.navigate(["/list-sondage"]);
    });
  }
  onSubmit() {
    this.vote();
  }
}
