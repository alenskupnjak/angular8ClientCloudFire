import { Injectable, OnInit } from "@angular/core";

// interface mportiran kroz file
// import { Settings } from '../models/Settings';

// interface unutar componente
export interface Settings {
  allowRegistration?: boolean;
  disableBalanceOnAdd?: boolean;
  disableBalanceOnEdit?: boolean;
}

@Injectable()
// pocetno stanje
export class SettingsService {
  // pocetna vrijenost ako nema zapisa u local storage
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true,
  };

  constructor() {
    console.log(' da da da SettingsService');
    if (localStorage.getItem("settingsAngularClient") != null) {
      this.settings = JSON.parse(localStorage.getItem("settingsAngularClient"));
    }
  }


  getSettings() {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem("settingsAngularClient", JSON.stringify(settings));
  }
}
