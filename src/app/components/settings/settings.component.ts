import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from 'src/app/services/settings.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from 'src/app/models/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;
  constructor(
    private router: Router,
    private falshMessage: FlashMessagesService,
    private settingsService: SettingsService,

  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.falshMessage.show('Settings saved.', {
      cssClass: 'alert-success', timeout: 4000
    });
  }

}
