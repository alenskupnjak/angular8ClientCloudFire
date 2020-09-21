import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    console.log('da da da   AuthService');

  }

  // logiranje korisnika
  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // sign je ispušten u zadnjim u verziji
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => {
          console.log(userData);
          return resolve(userData);
        },
        (err) => reject(err)
      );
    });
  }

  // registracija korisnika
  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (userData) => {
          return resolve(userData);
        },
        (err) => reject(err)
      );
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(
      map((auth) => {
        return auth;
      })
    );
  }

  // odlogiranje
  logout() {
    this.afAuth.signOut();
  }
}
