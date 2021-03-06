import { Component, OnInit } from "@angular/core";
import { ClientService } from "src/app/services/client.service";
import { Client } from "../../models/Client";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed : number;

  constructor(private clientsServices: ClientService) {}

  ngOnInit() {
    this.clientsServices.getAllClient().subscribe((clients) => {
      this.clients = clients;
      this.getTotalOwed();
    });
  }

  getTotalOwed() {
    this.totalOwed  = this.clients.reduce((total, client) => {
      return total + parseFloat(client.balance.toString());
    }, 0);

    console.log(this.totalOwed,this.totalOwed);

  }
}
