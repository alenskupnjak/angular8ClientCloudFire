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
    // Get id from url PATH: client/:id
    this.id = this.route.snapshot.params["id"];

    // Povuci kilinta
    this.clientService.getOneClient(this.id).subscribe(client=>{
      if(client != null) {
        if(client.balance > 0) {
          this.hasBalance = true;
        }
      }

      this.client = client;
    })
  }


  onDeleteClick() {

  }
}
