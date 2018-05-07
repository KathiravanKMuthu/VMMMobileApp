import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ENV } from '@environment';

@Injectable()
export class WpService {

	http: any;
	apiUrl: String;
	englishMsgUrl: String;
	tamilMsgUrl: String;

  constructor(http: HttpClient) {
    this.http = http;
    //when you use an api, user baseUrl to link your app with your server
		this.apiUrl = ENV.API_ENDPOINT;
		this.englishMsgUrl = ENV.WP_ENGLISH_URL;
		this.tamilMsgUrl = ENV.WP_TAMIL_URL;
  }

	getAllMessages(start,count=10) {
	    var englishPosts = [];
	      
	    var p1 = new Promise(resolve => { 
		      this.http.get(this.englishMsgUrl+'per_page='+count+'&page='+start).subscribe(res => {
		        	englishPosts = res.data;
		      });
	  	});

	  	console.log(englishPosts);

	      this.http.get(this.tamilMsgUrl+'per_page='+count+'&page='+start).subscribe(res => {
	      		console.log("after Tamil posts");
	        	englishPosts = englishPosts.concat(res.data);
	      });

	      console.log(englishPosts);
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
