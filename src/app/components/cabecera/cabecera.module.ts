// cabecera.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        CabeceraComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        CabeceraComponent
    ]
})
export class CabeceraModule { }
