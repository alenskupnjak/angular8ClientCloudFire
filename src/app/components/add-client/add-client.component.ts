import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from "../../models/Client";
import { ClientService } from "../../services/client.service";

// obavezno dodati {FormsModule} za template driven formu !!!!!
@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"],
})
export class AddClientComponent implements OnInit {
  // početna vrijednost init
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0,
  };

  disableBalanceOnAdd: boolean = false;
  @ViewChild("clientForm", { static: true }) form: any;

  constructor(
    // private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    this.clientService.newClient(value);

    // if (!valid) {
    //   // Show error
    //   this.flashMessage.show("Please fill out the form correctly", {
    //     cssClass: "alert-danger",
    //     timeout: 4000,
    //   });
    // } else {
    //   // Add new client
    //   this.clientService.newClient(value);
    //   // Show message
    //   this.flashMessage.show("New client added", {
    //     cssClass: "alert-success",
    //     timeout: 4000,
    //   });
    //   // Redirect to dash
    //   this.router.navigate(["/"]);
    // }
  }
}
