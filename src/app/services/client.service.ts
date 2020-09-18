import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Client } from "../models/Client";

@Injectable()
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(
    // kljucni parametar koji aktivira Firebase
    private firestoreData: AngularFirestore
    ) {
    console.log('Ovo se aktivira samo prvi puta kada dolazim u aplikaciju');

    // inicijalizacije baze
    this.clientsCollection = this.firestoreData.collection(
      "databaseClients",
      (ref) => ref.orderBy("lastName", "asc")
    );
  }

  // Povuci podatke o klijentima iz baze
  getAllClient(): Observable<Client[]> {
    // Get clients with the id
    console.log("this.clientsCollection=", this.clientsCollection);

    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map((changes, ind) => {
        console.log(ind, "changes=", changes);

        return changes.map((action, index) => {
          console.log(index, "action", action.payload.doc);

          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    console.log("this.clients=", this.clients);

    return this.clients;
  }

  //
  // dodavanje novog klijenta
  newClient(client: Client) {
    this.clientsCollection.add(client);
  }

  //
  // Dohvati jednog klijenta
  getOneClient(id: string): Observable<Client> {
    this.clientDoc = this.firestoreData.doc<Client>(`databaseClients/${id}`);
    console.log("this.clientDoc=", this.clientDoc);

    this.client = this.clientDoc.snapshotChanges().pipe(
      map((action) => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Client;
          data.id = action.payload.id;
          return data;
        }
      })
    );

    return this.client;
  }

  //
  // brisanje klijenta
  deleteClient(client: Client) {
    this.clientDoc = this.firestoreData.doc(`databaseClients/${client.id}`);
    this.clientDoc.delete();
  }


  // updatiramo klijenta
  updateClient(client: Client) {
    // databaseClients je naziv baze!
    this.clientDoc = this.firestoreData.doc(`databaseClients/${client.id}`);
    this.clientDoc.update(client);
  }
}
