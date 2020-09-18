import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

import { Logger } from "./LogModel";

@Injectable()
export class LogService {
  logs: Logger[] = [];

  // definiram OBSERVER za promjenu podataka koji ocitava logs.form
  private logSource = new BehaviorSubject<any>({id: null,text: null,date: null});
  logSourceObser = this.logSource.asObservable();

  // definiram OBSERVER koji ide u logs
  private stateSource = new BehaviorSubject<boolean>(true);
  stateSourceObser = this.stateSource.asObservable();

  constructor() {
    console.log('Prosao sam kroz constructor log.service');
  }

  // iako su podaci statički, radimo imitaciju HTTP-a
  getLogs(): Observable<Logger[]> {
    // ako NEMAMO podataka u Local storage postavljamo prazno polje
    if (localStorage.getItem("logsLogger") === null) {
      this.logs = [];
    } else {
      // podaci postoje u localstorage ocitavamo podatke
      this.logs = JSON.parse(localStorage.getItem("logsLogger"));
    }
console.log('prosao sam -----------------');

    // rxjs funkcija...
    return of(this.logs)

    // return of(
    //   this.logs.sort((a, b) => {
    //     return (b.date = a.date);
    //   })
    // );
  }

  // saljemo promjenu u
  setFormLog(log: Logger) {
    this.logSource.next(log);
  }


  // ADD
  addLog(log: Logger) {
    // dodajem na listu , vrsi se promjena
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
