import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { Client } from "../../models/Client";
// import { SettingsService } from '../../services/settings.service';

@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.css"],
})
export class EditClientComponent implements OnInit {
  id: string;
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0,
  };
  disableBalanceOnEdit: boolean;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService // private settingsService: SettingsService
  ) {}

  ngOnInit() {
    // this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;

    // Get id from url
    this.id = this.route.snapshot.params["id"];
    // Get client
    this.clientService
      .getOneClient(this.id)
      .subscribe((client) => (this.client = client));
  }

  onSubmit(formData: any) {
    console.log("formData=", formData);
    console.log("this", this);
    console.log("this.id", this.id);
    console.log("formData.value=", formData.value);
    console.log("formData.value=", formData.value.id);

    this.client = {
      firstName: formData.value.firstName,
      lastName: formData.value.lastName,
      email: formData.value.email,
      phone: formData.value.phone,
      balance: formData.value.balance,
    };

    if (!formData.valid) {
      // ugradena funkcija angular2...
      this.flashMessage.show("Please fill out the form correctly", {
        cssClass: "alert-danger",
        timeout: 4000,
      });
    } else {
      // Add id to client
      this.client.id = this.id;
      // Update client
      this.clientService.updateClient(this.client);
      this.flashMessage.show("Client updated", {
        cssClass: "alert-success",
        timeout: 4000,
      });
      this.router.navigate(["/client/" + this.id]);
    }
  }
  
}
