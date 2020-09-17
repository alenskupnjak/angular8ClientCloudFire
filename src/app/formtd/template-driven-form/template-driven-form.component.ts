import { Component, OnInit, ViewChild } from "@angular/core";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive?: boolean;  // ? predstavlja opcionalno !!!
  registered?: any;  // ? predstavlja opcionalno !!!
  hide?: boolean;  // ? predstavlja opcionalno !!!
  img?: string;  // ? predstavlja opcionalno !!!
}

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  styleUrls: ["./template-driven-form.component.css"],
})
export class TemplateDrivenFormComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: "",
  };

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showForm: boolean = false;
  @ViewChild("userForm", { static: true }) form: any;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john@gmail.com",
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true,
        img:'http://lorempixel.com/400/200/people/1'
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: "kevin@yahoo.com",
        isActive: false,
        registered: new Date("03/11/2017 06:20:00"),
        hide: true,
        img:'http://lorempixel.com/400/200/people/2'
      },
      {
        firstName: "Karen",
        lastName: "Williams",
        email: "karen@gmaial.com",
        isActive: true,
        registered: new Date("11/02/2016 10:30:00"),
        hide: true,
        img:'http://lorempixel.com/400/200/people/4'
      },
    ];

    this.loaded = true;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }

  deleteUser(index) {
    this.users.splice(index, 1);
  }
}
