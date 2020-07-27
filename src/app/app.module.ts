import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./comm/login/login.component";
import { RegisterComponent } from "./comm/register/register.component";
import { SondageComponent } from "./sondage/sondage.component";
import { ListSondageComponent } from "./list-sondage/list-sondage.component";
import { DetailSondageComponent } from "./detail-sondage/detail-sondage.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { VoteSondageComponent } from "./vote-sondage/vote-sondage.component";
import { HeaderComponent } from "./header/header.component";
import { TokenInterceptor } from "./service/token.intercepter";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SondageComponent,
    ListSondageComponent,
    DetailSondageComponent,
    VoteSondageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
