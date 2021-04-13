import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from "@angular/forms"; // ngmodule
import { FlashMessagesModule } from "angular2-flash-messages";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { ClientDetailComponent } from "./components/client-detail/client-detail.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";

// servisi
import { AuthService } from "./services/auth.service";
import { ClientService } from "./services/client.service";
import { SettingsService } from "./services/settings.service";

// logger
import { LogFormComponent } from "./logger/log-form/log-form.component";
import { LogsComponent } from "./logger/logs/logs.component";
import { NavbarlogComponent } from "./logger/navbarlog/navbarlog.component";
import { LogService } from "./logger/log.service";

// formTD
import { TemplateDrivenFormComponent } from "./formtd/template-driven-form/template-driven-form.component";

import { PostModule } from "./emitt/post.module";
import { PostService } from "./emitt/post.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ClientsComponent,
    SidebarComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDetailComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    NotFoundComponent,
    LogFormComponent,
    LogsComponent,
    NavbarlogComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      environment.firebaseConfig,
      "cloudFirestore"
    ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule, // obavezno dodati za template driven formu
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    PostModule,
  ],
  providers: [
    AuthService,
    ClientService,
    SettingsService,
    LogService,
    PostService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
