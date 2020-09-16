import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { SettingsService } from "../../services/settings.service";
import { Client } from "../../models/Client";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  loggedInUser: string;
  // definiramo u settingsu, pocetno inicijalno stanje pojedinh parametara
  showRegister: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private settingService: SettingsService
  ) {}

  ngOnInit() {
    // definiramo u settingsu, pocetno inicijalno stanje pojedinh parametara
    this.showRegister = this.settingService.getSettings().allowRegistration;
    
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
        console.log(this.loggedInUser);
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout() {
    this.authService.logout();
    this.flashMessage.show("You are logged out", {
      cssClass: "alert-sucess",
      timeout: 4000,
    });
    this.router.navigate(["/login"]);
  }
}
