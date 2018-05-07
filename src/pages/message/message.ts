import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ENV } from '@environment';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
    msg: any;
    imageUrl: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, 
                public alertCtrl: AlertController, private sharing: SocialSharing, public loadingCtrl: LoadingController) {
    	this.msg = navParams.get('message');
      this.imageUrl = ENV.IMAGE_PATH;
    }

    ionViewDidLoad() {
    }

    share(message: any){
      var imageFile = this.imageUrl + message.picture;
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();
      
        this.sharing.share(message.description, message.title, imageFile, null).then(() => {
          /*let alert = this.alertCtrl.create({
                        title: 'Success', subTitle: 'Share succeed!', buttons: ['OK']
                      });
          alert.present();*/
        }).catch((err) => {
          let alert = this.alertCtrl.create({
                        title: 'Error', subTitle: 'Share Failed!', buttons: ['OK'], cssClass: "customLoader"
                      });
          alert.present();
        });

      setTimeout(() => {
        loading.dismiss();
      }, 5000);

    }

    favorite(){
    	//check if favorite exist
    	var fav = JSON.parse(localStorage.getItem("msm_favorite"));
    	if(fav) {
        var isexist= false;
        //check if the article is in favorite
        for(let i = 0; i < fav.length; i++){
            if(this.msg.id === fav[i].id){
                isexist = true;
            }
        }

      	//if not exist add article to favorite
        if(!isexist){
          fav.push(this.msg);
          localStorage.setItem('msm_favorite', JSON.stringify(fav));
          /*let alert = this.alertCtrl.create({
      	                   title: 'Success', subTitle: 'Successfully added to Favorite list!', buttons: ['OK']
          });

          alert.present();*/
        } // if(!isexist)
    	} // if(fav)
      else
      {
      	  //if not exist create a favorite
      	  var arr = new Array();
      	  arr.push(this.msg);

      	  localStorage.setItem('msm_favorite', JSON.stringify(arr));
          /*let alert = this.alertCtrl.create({
                           title: 'Success', subTitle: 'Successfully added to Favorite list!', buttons: ['OK']
          });

          alert.present();*/
    	}
    }

    unFavorite(){
        var messages = JSON.parse(localStorage.getItem("msm_favorite"));
        for(let i = 0; i < messages.length; i++)
        {
            if(this.msg.id === messages[i].id)
            {
              messages.splice(messages.indexOf(messages[i]), 1);
              localStorage.setItem("msm_favorite", JSON.stringify(messages));

              /*let alert = this.alertCtrl.create({
                           title: 'Success', subTitle: 'Successfully removed from Favorite list!', buttons: ['OK']
              });

              alert.present();*/
            } // if
        } // for
    }

    isFavorite()
    {
      var fav = JSON.parse(localStorage.getItem("msm_favorite"));
      if(fav){
        //check if the article is in favorite
        for(let i = 0; i < fav.length; i++)
        {
              if(this.msg.id === fav[i].id)
                  return true;
        }
      }
    }

}
