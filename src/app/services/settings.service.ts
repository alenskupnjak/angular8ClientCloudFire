import { Injectable } from '@angular/core';


// interface mportiran kroz file
// import { Settings } from '../models/Settings';

// interface unutar componente
export interface Settings {
  allowRegistration?: boolean;
  disableBalanceOnAdd?: boolean;
  disableBalanceOnEdit?: boolean;
}


@Injectable()
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true,
  }

  constructor() {
    if(localStorage.getItem('settings') != null) {
      this.settings = JSON.parse(localStorage.getItem('settings'));
    }
  }

  getSettings() {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }

}
