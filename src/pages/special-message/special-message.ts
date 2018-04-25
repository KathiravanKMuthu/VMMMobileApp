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
                       title: 'Error', subTitle: 'Share Failed!', buttons: ['OK']
                     });
          alert.present();
     })
  }

  favorite(){
let confirm = this.alertCtrl.create({
      title: 'DO you want to add to Favorite?',
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
          confirm.present();
    //check if favorite exist
    var fav= JSON.parse(localStorage.getItem("msm_favorite"));
    if(fav){
      var isexist= false;
      //check if the article is in favorite
      for(let i=0; i<fav.length; i++){
            if(this.msg.id===fav[i].id){
              isexist= true
            }
          }
    //if exist add article to favorite
    if(!isexist){
      fav.push(this.msg);
      localStorage.setItem('msm_favorite', JSON.stringify(fav));
      let alert = this.alertCtrl.create({
     title: 'Success',
      subTitle: 'Successfully added to Favorite list!',
      buttons: ['OK']
    });
    alert.present();
    }else{
      let alert = this.alertCtrl.create({
     title: 'Warning',
      subTitle: 'Message already exist in Favorite list!',
      buttons: ['OK']
    });
    alert.present();
    }
    }else{
    //if not exist create a favorite
    var arr= new Array();
    arr.push(this.msg);
    localStorage.setItem('msm_favorite', JSON.stringify(arr));
    let alert = this.alertCtrl.create({
     title: 'Success',
      subTitle: 'Successfully added to Favorite list!',
      buttons: ['OK']
    });
    alert.present();
    }
          }
        }
      ]
    });
   confirm.present();
  }

  getVideoURL(url, name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
          results = regex.exec(url);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}
