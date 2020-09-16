import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from "../../models/Client";
import { ClientService } from "../../services/client.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { SettingsService } from "../../services/settings.service";

// obavezno dodati {FormsModule} za template driven formu !!!!!
@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"],
})
export class AddClientComponent implements OnInit {
  // init client
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0,
  };

  // definiramo u settingsu, pocetno inicijalno stanje pojedinh parametara
  disableBalanceOnAdd: boolean;


  @ViewChild("clientForm", { static: true }) form: any;

  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {

    console.log('ajmooo',this.settingsService.getSettings());
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  onSubmit(formData) {
    if (this.disableBalanceOnAdd) {
      formData.value.balance = 0;
    }

    this.client = {
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      email: formData.value.email,
      phone: formData.value.phone,
      balance: formData.value.balance,
    };

    if (formData.value.balance < 0) {
      console.log("Mora biti veci od 0");
    }

    if (!formData.valid) {
      // Show error
      this.flashMessage.show("Please fill out the form correctly", {
        cssClass: "alert-danger",
        timeout: 4000,
      });
    } else {
      // Add new client
      this.clientService.newClient(this.client);
      // Show message
      this.flashMessage.show("New client added", {
        cssClass: "alert-success",
        timeout: 4000,
      });
      // Redirect to dash
      this.router.navigate(["/"]); // za ovo import { Router } from "@angular/router";
    }
  }
}
