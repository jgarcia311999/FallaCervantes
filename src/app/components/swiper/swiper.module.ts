import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
    declarations: [
        SwiperComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        SwiperComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

    
})
export class SwiperModule { }
