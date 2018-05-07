import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { MessagesPage } from '../messages/messages';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

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
