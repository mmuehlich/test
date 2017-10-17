import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Guest {
  id?: string;
  name: string;
  eMail: string;
  status: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sarah ❤ Matthias';
  user = 'Matthias';
  
  guests: AngularFirestoreCollection<Guest>;
  guestList$: Observable<Guest[]>;


  constructor(private afs: AngularFirestore) {
    this.guests = this.afs.collection<Guest>('guests');
    this.guestList$ = this.guests.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Guest;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  addGuest(name: string, email: string) {
    if (name && name.trim().length) {
      this.guests.add({ name: name, eMail: email, status: '' });
    }
  }

  updateGuest(guest: Guest) {
    this.guests.doc(guest.id).update(guest);
  }
  
  deleteGuest(guest: Guest) {
    this.guests.doc(guest.id).delete();
  }
}
