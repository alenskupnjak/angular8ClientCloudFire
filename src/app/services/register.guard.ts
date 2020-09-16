import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SettingsService } from "../services/settings.service";

@Injectable()
export class RegisterGuard implements CanActivate {
  constructor(
    private router: Router,
    private settingService: SettingsService
  ) {}

  canActivate(): boolean {
    if (this.settingService.getSettings().allowRegistration) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

// dodati u app-routing.module.ts
// providers: [....,RegisterGuard,...],
// obavezno ovdje dodajemo zastitu za rute ako to zelimo
