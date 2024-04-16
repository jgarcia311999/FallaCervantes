import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { IonicModule } from '@ionic/angular';
import { SwiperModule } from '../swiper/swiper.module';

@NgModule({
    declarations: [
        InfoComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        SwiperModule
    ],
    exports: [
        InfoComponent
    ]
})
export class InfoModule { }
