import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ENV } from '@environment';
import { MessagePage } from '../message/message';

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class Favorite {

  messages:any[];
  mode: String="list";
  imageUrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.getFavorite();
    this.imageUrl = ENV.IMAGE_PATH;
  }

  ionViewDidLoad() {
  }

  detail(message){
  this.navCtrl.push(MessagePage, {
    message:message
  });
}

  delete(item){
      let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to unfavorite this?',
      message: '',
      buttons: [
        {
          text: 'No',
          handler: () => {

          }
        },
        {
          text: 'Yes',
          handler: () => {
          var messages= JSON.parse(localStorage.getItem("msm_favorite"));
          for(let i=0; i<messages.length; i++){
            if(item.id===messages[i].id){
              messages.splice(messages.indexOf(messages[i]), 1);
              this.messages= messages;
              localStorage.setItem("msm_favorite", JSON.stringify(messages));
            }
          }
          }
        }
      ]
    });
    confirm.present();
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
