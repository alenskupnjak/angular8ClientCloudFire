import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { SettingsService } from "../../services/settings.service";
import { Settings } from "../../models/Settings";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    private flashMessage: FlashMessagesService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
    this.vrijednosti();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessage.show("Settings saved", {
      cssClass: "alert-success",
      timeout: 4000,
    });
  }

  vrijednosti() {
    console.log(this.settings);
  }
}
