import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraModule } from './components/cabecera/cabecera.module';
import { SwiperModule } from './components/swiper/swiper.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CabeceraModule, SwiperModule, provideFirebaseApp(() => initializeApp({"projectId":"appfalla-cc904","appId":"1:911808683732:web:2e242b16dfd5421a91a541","storageBucket":"appfalla-cc904.appspot.com","apiKey":"AIzaSyDVWyMVZ45fKJ8U80XqQF5u6RvfwRHkJvs","authDomain":"appfalla-cc904.firebaseapp.com","messagingSenderId":"911808683732"})), provideAuth(() => getAuth())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
