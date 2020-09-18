import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";

import { LogService } from "../log.service";
import { Logger } from "../LogModel";

@Component({
  selector: "app-logs",
  templateUrl: "./logs.component.html",
  styleUrls: ["./logs.component.css"],
})
export class LogsComponent implements OnInit {
  logs: Logger[];

  // logs: LogService[];
  selectedLog: Logger;
  loaded: boolean = false;

  constructor(
    private logService: LogService,
    private flashMessagesService: FlashMessagesService
  ) {}

  ngOnInit() {
    // inicijalno ucitavanje podataka iz localstorage
    this.logService.getLogs().subscribe((logs) => {
      this.logs = logs;
      this.loaded = true;
    });

    // setiramo OBSERVER za pracenje promjene statusa
    this.logService.stateSourceObser.subscribe((clear) => {
      console.log("Status se je promjenio");
      if (clear) {
        this.selectedLog = { id: "", text: "", date: "" };
      }
    });
  }

  // selektiramo
  onSelect(log: Logger) {
    this.logService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Logger) {
    this.flashMessagesService.show("Podatak je obrisan", {
      cssClass: "alert-success",
      timeout: 2000,
    });
    this.logService.deleteLog(log);
  }
}
