import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Client } from "../models/Client";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  clientsCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private firestoreData: AngularFirestore) {
    console.log('this.firestoreData= ',this.firestoreData);

    this.clientsCollection = this.firestoreData.collection("clients", (ref) =>
      ref.orderBy("lastName", "asc")
    );
  }

  // Povuci podatke o klijentima iz baze
  getAllClient(): Observable<Client[]> {
    // Get clients with the id
    console.log('this.clientsCollection=',this.clientsCollection);

    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map((changes, ind) => {
        console.log(ind,'changes=',changes);

        return changes.map((action, index) => {
          console.log(index,'action',action.payload.doc);

          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
      console.log('this.clients=',this.clients);

    return this.clients;
  }

  newClient(client: Client) {
    this.clientsCollection.add(client);
  }

  getOneClient(id: string): Observable<Client> {
    this.clientDoc = this.firestoreData.doc<Client>(`clients/${id}`);
    console.log('this.clientDoc=',this.clientDoc);

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
}
