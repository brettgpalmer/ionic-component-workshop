import { Component } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {

  contact: Contact = {
    name: 'Jo Developer',
    email: 'jodev@company.com',
    phone: '801-555-1011',
    isMobile: true,
    birthdate: new Date('11-Oct-1988')
  };

  constructor() {

  }

}
