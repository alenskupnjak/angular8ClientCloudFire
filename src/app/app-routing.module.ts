import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { ClientDetailComponent } from "./components/client-detail/client-detail.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { LoginComponent } from "./components/auth/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RegisterComponent } from "./components/auth/register/register.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NavbarlogComponent } from "./logger/navbarlog/navbarlog.component";
import { TemplateDrivenFormComponent } from "./formtd/template-driven-form/template-driven-form.component";
import { PostsComponent } from "./emitt/posts/posts.component";

// GUARDS
import { AuthGuard } from "./services/auth.guard";
import { RegisterGuard } from "./services/register.guard";

const routes: Routes = [
  { path: "", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [RegisterGuard],
  },
  {
    path: "client/add",
    component: AddClientComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "client/edit/:id",
    component: EditClientComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "client/:id",
    component: ClientDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: "settings", component: SettingsComponent, canActivate: [AuthGuard] },
  { path: "logger", component: NavbarlogComponent },
  { path: "formTD", component: TemplateDrivenFormComponent },
  { path: "emitter", component: PostsComponent },
  // '**' mora biti zadnji u nizu
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, RegisterGuard], // obavezno ovdje dodajemo zastitu za rute ako to zelimo
})
export class AppRoutingModule {}

// Using MULTUPLE guards for a route in Angular
// The canActivate( ) method which should be overridden, should return only one of the following types
//  - Observable<boolean>
//  - Promise<boolean>
//  - boolean
// The multiple routes work like an ‘&&’ condition in javascript, i.e., angular won’t execute the later guards, if the first one fails.
