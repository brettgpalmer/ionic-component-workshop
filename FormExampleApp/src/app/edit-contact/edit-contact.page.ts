import { Contact } from './../../../../FormExampleApp3/src/models/contact.model';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {

  contact: Contact;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams) {
      this.contact = this.navParams.get('contact');
    }

  ngOnInit() {
  }

  saveContact(form) {
    this.modalController.dismiss(this.contact);
  }

  cancel() {
    this.modalController.dismiss();
  }

}
