import { Contact } from './../../models/contact.model';
import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage implements OnInit {
  // Use the following to access the contactForm here
  // @ViewChild('contactForm') contactForm: NgForm;
  contact: Contact;
  birthdate: any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    public platform: Platform) {
      this.contact = this.navParams.get('contact');
      this.birthdate = {
        year: { value: this.contact.birthdate.getFullYear() },
        month: { value: this.contact.birthdate.getMonth() + 1 },
        day: { value: this.contact.birthdate.getDate() }
      };
    }

  ngOnInit() {
  }

  saveContact() {
    // no validation check because save button cannot be used when any input has errors
    this.contact.birthdate = new Date(this.birthdate.year.value, 
        this.birthdate.month.value - 1, this.birthdate.day.value);
    this.modalController.dismiss(this.contact);
  }

  cancel() {
    this.modalController.dismiss();
  }

}
