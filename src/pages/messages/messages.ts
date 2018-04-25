import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

    constructor(public navCtrl: NavController,  public service: Service,
      public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
      this.page = 0;
      this.imageUrl = ENV.IMAGE_PATH;
      this.getAllMessages(0);
    }

    ionViewWilEnter() {
    }

    getAllMessages(refresher){
      let loader = this.loadingCtrl.create({
        content: 'Getting latest messages...',
      });

      this.messages = [];
      var next = (this.page)*20;
      loader.present().then(() => {
          this.service.getAllMessages(next).then(data => {
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
          var next = (this.page)*20;

          this.service.getAllMessages(next).then(data => {
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
