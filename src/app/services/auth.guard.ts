import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private angularFirebaseAuth: AngularFireAuth
  ) {}

  canActivate(): Observable<boolean> {
    return this.angularFirebaseAuth.authState.pipe(
      map((auth) => {
        if (!auth) {
          this.router.navigate(["/login"]);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}


// dodati u app-routing.module.ts
// ....providers: [AuthGuard], // obavezno ovdje dodajemo zastitu za rute ako to zelimo
