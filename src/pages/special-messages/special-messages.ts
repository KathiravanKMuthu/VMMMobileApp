import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { LoadingController } from 'ionic-angular';
import { SpecialMessagePage } from '../special-message/special-message';
import { MessagesPage } from '../messages/messages';

@IonicPage()
@Component({
  selector: 'page-special-messages',
  templateUrl: 'special-messages.html',
})
export class SpecialMessagesPage {

      page: any;
      messages:any;
      mode: String="list";
    
      // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
      public unregisterBackButtonAction: any;

      constructor(public navCtrl: NavController,  public service: Service,
        public alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform: Platform) {
        this.page = 0;
        this.getAllSpecialMessages(0);
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

      getAllSpecialMessages(refresher){
        this.messages = [];
        var next = (this.page)*20;

        this.service.getAllVideoMessages(next).then(data => {
          this.messages = data;
        });

        if(refresher != 0)
            refresher.complete();
      }

      getNext(infiniteScroll) : Promise<any>  {
        this.page = this.page+1;
  
        return new Promise((resolve) => {
          setTimeout(() => {
            var next = (this.page)*20;
  
            this.service.getAllVideoMessages(next).then(data => {
              this.messages = this.messages.concat(data);
            });
    
            if(infiniteScroll != 0)
              infiniteScroll.complete();
          }, 2000);
        });
      }
  
      detail(message){
        this.navCtrl.push(SpecialMessagePage, {
          message:message
        });
      }

      makelist(){
        this.mode="list";
      }

      makecard(){
        this.mode="card";
      }

      getVideoURL(url, name) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(url);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
      }
}
