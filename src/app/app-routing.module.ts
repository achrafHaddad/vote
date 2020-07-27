import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./comm/login/login.component";
import { RegisterComponent } from "./comm/register/register.component";
import { SondageComponent } from "./sondage/sondage.component";
import { ListSondageComponent } from "./list-sondage/list-sondage.component";
import { VoteSondageComponent } from "./vote-sondage/vote-sondage.component";
import { DetailSondageComponent } from "./detail-sondage/detail-sondage.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "create-sondage", component: SondageComponent },
  { path: "list-sondage", component: ListSondageComponent },
  { path: "vote/:id", component: VoteSondageComponent },
  { path: "edit/:id", component: DetailSondageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
