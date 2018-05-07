import { Component } from '@angular/core';
import { Loading, LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@IonicPage()
@Component({
  selector: 'page-special-message',
  templateUrl: 'special-message.html',
})
export class SpecialMessagePage {
  msg: any;
  trustedVideoUrl: SafeResourceUrl;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
                private sharing: SocialSharing, public loadingCtrl: LoadingController, private domSanitizer: DomSanitizer) {
    this.msg = navParams.get('message');
  }

  ionViewDidLoad() {
    var temp_url = "https://www.youtube.com/embed/" + this.getVideoURL(this.msg.picture, 'v');
    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(temp_url);
   
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  
  handleIFrameLoadEvent() {
    this.loading.dismiss();
  }

  share(message: any){
     this.sharing.share(message.description + " " + message.picture, message.title, null, null).then(()=>{
        /*let alert = this.alertCtrl.create({
             title: 'Success', subTitle: 'Share succeed!', buttons: ['OK']
        });
        alert.present();*/
     },
     ()=>{
         let alert = this.alertCtrl.create({
                       title: 'Error', subTitle: 'Share Failed!', buttons: ['OK'], cssClass: "customLoader"
                     });
          alert.present();
     })
  }

  getVideoURL(url, name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(url);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}
