import { TransformVisitor } from "@angular/compiler/src/render3/r3_ast";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { Subscription } from 'rxjs';

import { LogService } from "../../logger/log.service";

// import { FormsModule } from "@angular/Forms"; u app.module !!!!!za ngModule

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"],
})
export class TemplateDrivenFormComponent implements OnInit, OnDestroy {
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
  };
  LoggerSub: Subscription
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  showForm: boolean = false;
  currentClass: {};
  currentStyle: {};
  // za korištenje forme..
  @ViewChild("userForm", { static: true }) form: any;

  constructor(private loggerServis: LogService) {}

  ngOnInit() {
    // podatak za probu dolazi iz logger-a
    this.LoggerSub = this.loggerServis.stateSourceObser.subscribe((data) => {
      console.log(" Ja, template -d znam da se jesto promjenilo u FormTD");
    });

    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true,
        img: "http://lorempixel.com/400/200/people/1",
        balans: 111,
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevin@yahoo.com",
        isActive: false,
        registered: new Date("03/11/2017 06:20:00"),
        hide: true,
        balans: 200,
      },
      {
        firstName: "Karen",
        lastName: "Williams",
        email: "karen@gmaial.com",
        isActive: true,
        registered: new Date("11/02/2016 10:30:00"),
        hide: true,
        img: "http://lorempixel.com/400/200/people/4",
        balans: 333,
      },
    ];

    this.loaded = true;
    this.setCurrentClases();
    this.setcurrentStyle();
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      // this.form.reset();
    }
  }

  setCurrentClases() {
    this.currentClass = {
      "btn-success": this.enableAdd,
      "big-text": this.showExtended,
    };
  }

  setcurrentStyle() {
    this.currentStyle = {
      "padding-top": this.showExtended ? "" : "40px",
      "big-text": this.showExtended,
      color: this.showExtended ? "red" : "blue",
    };
  }

  deleteUser(index) {
    this.users.splice(index, 1);
  }

  slusaj(e, user) {
    // mouseover, mouseout, mousedown, mouseup, dblclick
    console.log(e);
    console.log(user);
  }

  fireEvent(e) {
    console.log(e);
    console.log(e.target.value, e.type);
  }

  ngOnDestroy(){
    this.LoggerSub.unsubscribe();
  }
}



export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive?: boolean; // ? predstavlja opcionalno !!!
  registered?: any; // ? predstavlja opcionalno !!!
  hide?: boolean; // ? predstavlja opcionalno !!!
  img?: string; // ? predstavlja opcionalno !!!
  balans?: number; // ? predstavlja opcionalno !!!
}
