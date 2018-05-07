import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { ENV } from '@environment';
import { MessagePage } from '../message/message';
import { MessagesPage } from '../messages/messages';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class Favorite {

  messages:any[];
  mode: String="list";
  imageUrl: any;
    
  // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
  public unregisterBackButtonAction: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public platform: Platform) {
    this.imageUrl = ENV.IMAGE_PATH;
  }

  ionViewDidEnter() {
    this.getFavorite();
    var messages = JSON.parse(localStorage.getItem("msm_favorite"));
    if(messages == null || messages.length <= 0)
    {
      let alert = this.alertCtrl.create({
                   title: 'Info', subTitle: "Your favorite list is empty !!!", buttons: ['OK'], cssClass: "customLoader"

      });

      alert.present();
    }

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

  detail(message){
    this.navCtrl.push(MessagePage, {
      message:message
    });
  }

  delete(item) {
      var messages = JSON.parse(localStorage.getItem("msm_favorite"));
      for(let i = 0; i < messages.length; i++)
      {
          if(item.id === messages[i].id)
          {
              messages.splice(messages.indexOf(messages[i]), 1);
              localStorage.setItem("msm_favorite", JSON.stringify(messages));
              this.messages = messages;
              /*let alert = this.alertCtrl.create({
                           title: 'Success', subTitle: 'Successfully removed from Favorite list!', buttons: ['OK'], cssClass: "customLoader"
              });

              alert.present();*/
          } // if
      } // for
  }

	getFavorite(){
	//find favorite in localStorage
		this.messages = JSON.parse(localStorage.getItem("msm_favorite"));
	}


  makelist(){
    this.mode="list";
  }

  makecard(){
    this.mode="card";
  }
}
