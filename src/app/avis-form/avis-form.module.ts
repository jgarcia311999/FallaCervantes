import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisFormPageRoutingModule } from './avis-form-routing.module';

import { AvisFormPage } from './avis-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisFormPageRoutingModule
  ],
  declarations: [AvisFormPage]
})
export class AvisFormPageModule {}
