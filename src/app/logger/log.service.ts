import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

import { Logger } from "./LogModel";

@Injectable()
export class LogService {
  logs: Logger[] = [];

  // definiram OBSERVER za promjenu podataka
  private logSource = new BehaviorSubject<Logger>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();

  // definiram OBSERVER
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {}

  // iako su podaci statički, radimo imitaciju HTTP-a
  getLogs(): Observable<Logger[]> {
    // ako NEMAMO podataka u Local storage
    if (localStorage.getItem("logsLogger") === null) {
      this.logs = [];
    } else {
      this.logs = JSON.parse(localStorage.getItem("logsLogger"));
    }

    return of(
      this.logs.sort((a, b) => {
        return (b.date = a.date);
      })
    );
  }

  // saljemo promjenu u
  setFormLog(log: Logger) {
    this.logSource.next(log);
  }

  // ADD
  addLog(log: Logger) {
    this.logs.unshift(log);

    // Add to local storage
    localStorage.setItem("logsLogger", JSON.stringify(this.logs));
  }

  // UPDATE
  updateLog(log: Logger) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(log);

    // Update local storage
    localStorage.setItem("logsLogger", JSON.stringify(this.logs));
  }


  // DELETE
  deleteLog(log: Logger) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });

    // Delete from local storage
    localStorage.setItem("logsLogger", JSON.stringify(this.logs));
  }

  clearState() {
    this.stateSource.next(true);
  }
}
