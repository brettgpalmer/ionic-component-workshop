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

  saveContact() {
    // add validation checks before dismissing
    this.modalController.dismiss(this.contact);
  }

  cancel() {
    // reset defaults before dismiss
    this.modalController.dismiss();
  }

}
