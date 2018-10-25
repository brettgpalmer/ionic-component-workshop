import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditContactPage } from './edit-contact.page';

const routes: Routes = [
  {
    path: '',
    component: EditContactPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditContactPage],
  entryComponents: [EditContactPage]
})
export class EditContactPageModule {}
