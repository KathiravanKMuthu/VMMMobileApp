import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { MessagesPage } from '../pages/messages/messages';
import { MessagePage } from '../pages/message/message';
import { SpecialMessagesPage } from '../pages/special-messages/special-messages';
import { SpecialMessagePage } from '../pages/special-message/special-message';
import { EventsPage } from '../pages/events/events';
import { EventPage } from '../pages/event/event';
import { ContactUsPage } from '../pages/contact-us/contact-us';
import { AboutUsPage } from '../pages/about-us/about-us';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Service } from '../providers/service';
import { OneSignal } from '@ionic-native/onesignal';

@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    MessagePage,
    EventsPage,
    EventPage,
    SpecialMessagesPage,
    SpecialMessagePage,
    ContactUsPage,
    AboutUsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MessagesPage,
    MessagePage,
    EventsPage,
    EventPage,
    SpecialMessagesPage,
    SpecialMessagePage,
    ContactUsPage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    Service,
    SocialSharing,
    SplashScreen,
    OneSignal,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
