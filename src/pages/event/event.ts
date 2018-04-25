import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ENV } from '@environment';


@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  msg: any;
  imageUrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private sharing: SocialSharing) {
    this.msg = navParams.get('message');
    this.imageUrl = ENV.IMAGE_PATH;
  }

  ionViewDidLoad() {
  }

  share(message){
    var imageFile = this.imageUrl + message.picture;
    this.sharing.share(message.description, message.title, imageFile, null).then(() => {
        /* let alert = this.alertCtrl.create({
             title: 'Success', subTitle: 'Share succeed!',buttons: ['OK']
        });
        alert.present();*/
    },
    ()=>{
         let alert = this.alertCtrl.create({
                        title: 'Error', subTitle: 'Share Failed!', buttons: ['OK']
                     });
          alert.present();
    })
  }

    getEventDateTime(msgPayload) {
      if(msgPayload != '')
      {
        var payload_json = JSON.parse(msgPayload);

        if(payload_json.event_start_date && payload_json.event_end_date)
          return payload_json.event_start_date + ' to ' + payload_json.event_end_date;
        else if(payload_json.event_start_date)
          return payload_json.event_start_date
        else
          return "";
      }
    }

    getEventPlace(msgPayload) {
      if(msgPayload != '')
      {
        var payload_json = JSON.parse(msgPayload);
        return payload_json.event_place;
      }
    }
}
