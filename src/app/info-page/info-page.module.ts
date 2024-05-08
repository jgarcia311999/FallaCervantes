import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPagePageRoutingModule } from './info-page-routing.module';

import { InfoPagePage } from './info-page.page';
import { SwiperModule } from "../components/swiper/swiper.module";

@NgModule({
    declarations: [InfoPagePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InfoPagePageRoutingModule,
        SwiperModule
    ]
})
export class InfoPagePageModule {}
