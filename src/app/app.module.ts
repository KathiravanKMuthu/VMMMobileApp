import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WpService } from '../providers/wp_service';
import { OneSignal } from '@ionic-native/onesignal';
import { AboutUsPageModule } from '../pages/about-us/about-us.module';
import { ContactUsPageModule } from '../pages/contact-us/contact-us.module';
import { EventPageModule } from '../pages/event/event.module';
import { EventsPageModule } from '../pages/events/events.module';
import { MessagePageModule } from '../pages/message/message.module';
import { MessagesPageModule } from '../pages/messages/messages.module';
import { SpecialMessagePageModule } from '../pages/special-message/special-message.module';
import { Service } from '../providers/service';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      navExitApp: false
    }),
    SpecialMessagePageModule,
    SpecialMessagePageModule,
    MessagePageModule,
    MessagesPageModule,
    EventsPageModule,
    EventPageModule,
    ContactUsPageModule,
    AboutUsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    Service,
    WpService,
    SocialSharing,
    SplashScreen,
    OneSignal,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
