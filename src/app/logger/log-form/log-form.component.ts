import { Component, OnInit } from "@angular/core";
import { LogService } from "../log.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"],
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  // definiramo dali je zapis novi ili je editirani
  isNew: boolean = true;

  constructor(private logService: LogService) {}

  ngOnInit() {
    // Subscribe to the selectedLog observable
    this.logService.logSourceObser.subscribe((log) => {
      console.log("Aktiviram se i kod promjene podataka");
      // setiram pocetno stanje
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


  vidi(e) {
    console.log(e);
    console.log(this.isNew);
  }
}
