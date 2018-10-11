import { Contact } from './../../models/contact.model';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  contact:Contact = {
    name: "Jo Developer",
    email: "jodev@company.com",
    phone: "801-555-1011",
    isMobile: true,
    birthdate: new Date('11-Oct-1988')
  };

  constructor(public navCtrl: NavController) {

  }

}
