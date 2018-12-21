import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = 'MessagesPage';
  //public alertShown: boolean = false;

  pages: Array<{icon:string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
                private oneSignal: OneSignal) {
    this.initializeApp();
    this.rootPage = 'MessagesPage';

    // used for an example of ngFor and navigation
    this.pages = [
      { icon:'fa fa-list', title: 'VMM Daily Devotion', component: 'MessagesPage' },
      { icon:'fa fa-video-camera', title: 'Special Messages', component: 'SpecialMessagesPage' },
      { icon:'fa fa-calendar', title: 'Events', component: 'EventsPage' },
      { icon:'fa fa-heart', title: 'Favorites', component: 'Favorite' },
      { icon:'fa fa-address-card', title: 'Contact Us', component: 'ContactUsPage' },
      { icon:'fa fa-users', title: 'About Us', component: 'AboutUsPage' }
    ];

    document.addEventListener("pause", () => {
        //this.nav.setRoot(this.rootPage);
        let listaFrames = document.getElementsByTagName("iframe");
        for (var index = 0; index < listaFrames.length; index++) {
            let iframe = listaFrames[index].contentWindow;    
            iframe.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
         }    
    }, false);
  
    /* document.addEventListener("resume", () => {
        let listaFrames = document.getElementsByTagName("iframe");
        for (var index = 0; index < listaFrames.length; index++) {
            let iframe = listaFrames[index].contentWindow;    
            iframe.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
         }  
    }, false); */
  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.oneSignal.startInit('e078180f-bd0d-422e-b87d-0287113db9fd', '601151014458');
      //this.oneSignal.setLogLevel({logLevel: 6, visualLevel: 6});

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      /*this.oneSignal.handleNotificationReceived().subscribe(() => {
        console.log("KKKKKKKKKKK handleNotificationReceived().subscribe");
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        console.log("KKKKKKKKKKK handleNotificationOpened().subscribe");
      });*/

      this.oneSignal.endInit();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
