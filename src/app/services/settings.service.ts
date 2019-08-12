import { Injectable } from '@angular/core';
import { Settings } from '../models/Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  settings: Settings = {
    allowRegistration: true,
    disableBalanceOnAdd: true,
    disableBalanceOnEdit: true
  }

  constructor() {
    if (localStorage.getItem('settings') != null) {
      // ******************************* This line containse error ***************************************//
      // error fixed.
      this.settings = JSON.parse(localStorage.getItem('settings'));
      //console.log(this.settings);
    }
   }

  getSettings(): Settings {
    return this.settings;
  }

  changeSettings(settings: Settings) {
    localStorage.setItem('settings', JSON.stringify(settings));
  }
}
