import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';

@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

    // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
    public unregisterBackButtonAction: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
	}

    ionViewDidEnter() {
        this.initializeBackButtonCustomHandler();
    }

    ionViewWillLeave() {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    }

    public initializeBackButtonCustomHandler(): void {
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(() => {
        	this.navCtrl.setRoot(MessagesPage);
        	this.navCtrl.popToRoot();
        }, 10);
    }

}
