import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactPage } from './contact.page';
import { EditContactPageModule } from '../edit-contact/edit-contact.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ContactPage }]),
    EditContactPageModule
  ],
  declarations: [ContactPage],
  entryComponents: []
})
export class ContactPageModule {}
