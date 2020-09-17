import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

import { Settings } from "../models/Settings";

@Injectable()
// pocetno stanje
export class SettingsService {
  // pocetna vrijenost ako nema zapisa u local storage
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true,
    ukljuciVjezbe: false,
  };

  // observer koji ce obavijestiti navnar da se je stanje u settingu promjenilo
  private settingsUpdated = new Subject<{ settings: Settings }>();

  constructor() {
    console.log(" da da da SettingsService");
    if (localStorage.getItem("settingsAngularClient") != null) {
      this.settings = JSON.parse(localStorage.getItem("settingsAngularClient"));
    }
  }


    // *********************************************
  // OBSERVABLE - ova funkcija je triger na promjene u settings podacima
  getsettingsUpdateListener() {
    // ako se mijenja vrijednost postupdate, salje signal
    return this.settingsUpdated.asObservable();
  }

  getSettings() {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    this.settings = settings;
    localStorage.setItem("settingsAngularClient", JSON.stringify(settings));
    this.settingsUpdated.next({ settings: this.settings });
  }
}
