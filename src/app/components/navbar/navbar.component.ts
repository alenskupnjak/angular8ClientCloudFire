import { Component, OnDestroy, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { SettingsService } from "../../services/settings.service";
import { Client } from "../../models/Client";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { Subscription } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean;
  loggedInUser: string;
  // definiramo u settingsu, pocetno inicijalno stanje pojedinh parametara
  showRegister: boolean;
  showVjezbe: boolean;

  private settingsSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private settingService: SettingsService
  ) {}

  ngOnInit() {
    // definiramo u settingsu, pocetno inicijalno stanje pojedinh parametara
    this.showRegister = this.settingService.getSettings().allowRegistration;
    this.showVjezbe = this.settingService.getSettings().ukljuciVjezbe;

    this.settingsSub = this.settingService
      .getsettingsUpdateListener()
      .subscribe(
        (data) => {
          console.log("Ja Navbar, sam cuo promjenu podataka u servisu!", data);
          this.showRegister = data.settings.allowRegistration;
          this.showVjezbe = data.settings.ukljuciVjezbe;
        },
        (err) => {
          console.log(err);
        }
      );

    // fire base sprema  auth- podatke u Indexdb local-storage....
    this.authService.getAuth().subscribe((auth) => {
      if (auth) {
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
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

  ngOnDestroy() {
    this.settingsSub.unsubscribe();
  }
}
