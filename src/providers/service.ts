import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ENV } from '@environment';

@Injectable()
export class Service {

	http: any;
	apiUrl: String;

  constructor(http: HttpClient) {
    this.http = http;
    //when you use an api, user baseUrl to link your app with your server
		this.apiUrl = ENV.API_ENDPOINT;
  }

	getAllMessages(start,count=20) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/read_all_daily_messages.php?count='+count+'&start='+start).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

	getAllVideoMessages(start,count=20) {
	    return new Promise(resolve => {
	      this.http.get(this.apiUrl+'/read_all_video_messages.php?count='+count+'&start='+start).subscribe(data => {
	        resolve(data);
	      }, err => {
	        console.log(err);
	      });
	    });
	  }

	  getAllEvents(start,count=20){
	    return new Promise(resolve => {
	      this.http.get(this.apiUrl+'/read_all_events.php?count='+count+'&start='+start).subscribe(data => {
	        resolve(data);
	      }, err => {
	        console.log(err);
	      });
	    });
	  }

	  getMessage(message_id) {
	    return new Promise(resolve => {
	      this.http.get(this.apiUrl+'/read.php?id='+message_id).subscribe(data => {
	        resolve(data);
	      }, err => {
	        console.log(err);
	      });
	    });
	  }
}
