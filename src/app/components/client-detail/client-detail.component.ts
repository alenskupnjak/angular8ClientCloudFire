import { Component, OnInit } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Client } from "../../models/Client";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-client-detail",
  templateUrl: "./client-detail.component.html",
  styleUrls: ["./client-detail.component.css"],
})
export class ClientDetailComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    console.log("showBalanceUpdateInput", this.showBalanceUpdateInput);
    console.log(" hasBalance", this.hasBalance);

    // Get id from url PATH: client/:id
    this.id = this.route.snapshot.params["id"];

    // Povuci kljenta
    this.clientService.getOneClient(this.id).subscribe((client) => {
      console.log("--------");

      console.log(client);

      if (client != null) {
        if (client.balance > 0) {
          this.hasBalance = true;
        }
      }
      // klijent definiran
      this.client = client;
    });
  }

  updateBalance() {
    this.clientService.updateClient(this.client);
    this.flashMessage.show("Balance updated", {
      cssClass: "alert-success",
      timeout: 4000,
    });
  }

  // obrisi klijenta
  onDeleteClick() {
    if (confirm("Are you sure?")) {
      this.clientService.deleteClient(this.client);
      this.flashMessage.show("Client removed", {
        cssClass: "alert-success",
        timeout: 4000,
      });
      this.router.navigate(["/"]);
    }
  }
}
