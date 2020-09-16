import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {auth} from 'firebase';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      // sign je ispušten u zadnjim u verziji
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData) => {
          console.log(userData);
          return resolve(userData)
        },
        (err) => reject(err)
      );
    });
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (userData) => resolve(userData),
        (err) => reject(err)
      );
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map((auth) =>{
      console.log(auth,'auth xxxxxxxxxxxxxxxxxxx');
      return auth}));
  }

  logout() {
    this.afAuth.signOut();
  }
}
