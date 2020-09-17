import { Component, OnInit } from "@angular/core";

import { LogService } from "../log.service";

import { Logger } from "../LogModel";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"],
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogService) {}

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.logService.selectedLog.subscribe((log) => {
      console.log('aktiviram se samo kod promjene podataka');

      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }

  onSubmit() {
    // Check if new log
    if (this.isNew) {
      // Create a new log
      const newLogger = {
        id: this.generateId(),
        text: this.text,
        date: new Date(),
      };
      // Add log
      this.logService.addLog(newLogger);
    } else {
      // Create log to be updated
      const updLogger = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };
      // Update log
      this.logService.updateLog(updLogger);
    }

    // Očisti formu
    this.clearState();
  }

  clearState() {
    this.isNew = true;
    this.id = "";
    this.text = "";
    this.date = "";
    this.logService.clearState();
  }

  // generiranje id
  generateId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
