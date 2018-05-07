import { Component } from '@angular/core';
import { NavController, LoadingController, Platform, AlertController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { ENV } from '@environment';
import { EventPage } from '../event/event';
import { MessagesPage } from '../messages/messages';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

      page: any;
      messages:any;
      mode: String="list";
      imageUrl: any;
      
      // Property used to store the callback of the event handler to unsubscribe to it when leaving this page
      public unregisterBackButtonAction: any;

      constructor(public navCtrl: NavController,  public service: Service,
        public alertCtrl: AlertController, public loadingCtrl: LoadingController, public platform: Platform) {
        this.page = 0;
        this.imageUrl = ENV.IMAGE_PATH;
        this.getAllEvents(0);
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

      getAllEvents(refresher){
        this.messages = [];
        var next = (this.page)*20;
        this.service.getAllEvents(next).then(data => {
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
  
            this.service.getAllEvents(next).then(data => {
              this.messages = this.messages.concat(data);
            });
    
            if(infiniteScroll != 0)
              infiniteScroll.complete();
          }, 2000);
        });
      }

      detail(message){
        this.navCtrl.push(EventPage, {
          message:message
        });
      }

      makelist(){
        this.mode="list";
      }

      makecard(){
        this.mode="card";
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
