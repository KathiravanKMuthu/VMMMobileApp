import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { LoadingController } from 'ionic-angular';
import { ENV } from '@environment';
import { MessagePage } from '../message/message';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

    page: any;
    messages:any;
    mode: String="list";
    imageUrl: any;
    // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
    public unregisterBackButtonAction: any;

    constructor(public navCtrl: NavController,  public service: Service,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform: Platform) 
    {
          this.page = 1;
          this.imageUrl = ENV.IMAGE_PATH;
          this.getAllMessages(0);
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
                this.presentConfirm();  
        }, 10);
    }

    presentConfirm() {
      let alert = this.alertCtrl.create({
        title: 'Confirm Exit',
        message: 'Do you want Exit?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
               console.log("Cancel clicked");
            }
          },
          {
            text: 'Yes',
            handler: () => {
              this.platform.exitApp();
            }
          }
        ],
        cssClass: "customLoader"
      });
       alert.present();
    }

    getAllMessages(refresher){
      let loader = this.loadingCtrl.create({
        content: 'Getting latest messages...',
      });

      this.messages = [];
      loader.present().then(() => {
          this.service.getAllMessages(this.page).then(data => {
            this.messages = data;
          });
          loader.dismiss();
      });

      if(refresher != 0)
          refresher.complete();
    }

    getNext(infiniteScroll) : Promise<any>  {
      this.page = this.page+1;

      return new Promise((resolve) => {
        setTimeout(() => {

          this.service.getAllMessages(this.page).then(data => {
            this.messages = this.messages.concat(data);
          });
  
          if(infiniteScroll != 0)
            infiniteScroll.complete();
        }, 2000);
      });
    }

    detail(message){
      this.navCtrl.push(MessagePage, {
        message:message
      });
    }

    makelist(){
      this.mode="list";
    }

    makecard(){
      this.mode="card";
    }
}
