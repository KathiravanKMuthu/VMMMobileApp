import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { ENV } from '@environment';

interface Message {
	id?: number;
	time_created?: string;
	title?: string;
	description?: string;
	picture?: string;
}

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
			var p1 = new Promise<any[]>(resolve => { 
	      this.http.get(this.englishMsgUrl+'per_page='+count+'&page='+start).subscribe(data => {
	        resolve(data);
	      }, err => {
					resolve([]);
	      });
			});
			
			var p2 = new Promise<any[]>(resolve => { 
	      this.http.get(this.tamilMsgUrl+'per_page='+count+'&page='+start).subscribe(data => {
	        resolve(data);
	      }, err => {
					console.log(err);
					resolve([]);
	      });
			});

			var allMessages = [];

			return Promise.all([p1, p2]).then(function(res){
				allMessages = (res[0].length != undefined) ? res[0]: [];
				allMessages = allMessages.concat(res[1]);
				var msgArr: any[] = [];
				allMessages.forEach(function(message){
						let msg: Message = {};
						msg.id = message.id;
						msg.time_created = message.date_gmt;
						msg.title = message.title.rendered;
						msg.description = message.content.rendered;
						msg.picture = message._embedded['wp:featuredmedia'][0].source_url;
						msgArr.push(msg);
				});

				// Sort it based on date created
				msgArr.sort((m1, m2) => {
					var date1 = new Date(m1.time_created);
					var date2 = new Date(m2.time_created);					
					return ((date1.getTime() - date2.getTime()));
				});

				return msgArr.reverse();
			}).catch(function(err) {
				console.log(err);
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
