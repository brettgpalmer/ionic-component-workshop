import { AngularFireAuth } from '@angular/fire/auth';
import { EditContactPage } from './../edit-contact/edit-contact.page';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage implements OnInit {

  contact: Contact = {
    name: 'Jo Developer',
    email: 'jodev@company.com',
    phone: '801-555-1011',
    isMobile: true,
    birthdate: new Date('11-Oct-1988')
  };
  loggedIn: boolean = false;

  constructor(public modalController: ModalController, public afAuth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(res => {
      if (res && res.uid) {
        this.loggedIn = true;
        this.contact = {...this.contact, name: res.displayName, email: res.email};
      } else {
        this.loggedIn = false;
      }
    });
  }

  initContact() {

  }

  async editContact() {
    const modal = await this.modalController.create({
      component: EditContactPage,
      componentProps: { contact: { ...this.contact } }
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data) {
          console.log('returned data:', data.data);
          this.contact = { ...data.data };
        }
      });
    return await modal.present();
  }

}
