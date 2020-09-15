import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {environment} from '../environments/environment'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { ClientDetailComponent } from "./components/client-detail/client-detail.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'cloudFirestore'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule  // obavezno dodati za template driven formu
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.20.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyDm_wjyGn5sSAVxwKI4CNBRelLrVXguKoE",
//     authDomain: "cloudfirestore-9984e.firebaseapp.com",
//     databaseURL: "https://cloudfirestore-9984e.firebaseio.com",
//     projectId: "cloudfirestore-9984e",
//     storageBucket: "cloudfirestore-9984e.appspot.com",
//     messagingSenderId: "1050125717014",
//     appId: "1:1050125717014:web:e74f6e20ee952191fb6f37",
//     measurementId: "G-X7X8NKGF1W"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>
