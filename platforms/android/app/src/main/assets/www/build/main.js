webpackJsonp([9],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, navParams, alertCtrl, sharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sharing = sharing;
        this.msg = navParams.get('message');
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].IMAGE_PATH;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
    };
    MessagePage.prototype.share = function (message) {
        var _this = this;
        var imageFile = this.imageUrl + message.picture;
        this.sharing.share(message.description, message.title, imageFile, null).then(function () {
            /*let alert = this.alertCtrl.create({
                            title: 'Success', subTitle: 'Share succeed!', buttons: ['OK']
                        });
            alert.present();*/
        }).catch(function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error', subTitle: 'Share Failed!', buttons: ['OK']
            });
            alert.present();
        });
    };
    MessagePage.prototype.favorite = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'DO you want to add to Favorite?',
            message: '',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        confirm.present();
                        //check if favorite exist
                        var fav = JSON.parse(localStorage.getItem("msm_favorite"));
                        if (fav) {
                            var isexist = false;
                            //check if the article is in favorite
                            for (var i = 0; i < fav.length; i++) {
                                if (_this.msg.id === fav[i].id) {
                                    isexist = true;
                                }
                            }
                            //if exist add article to favorite
                            if (!isexist) {
                                fav.push(_this.msg);
                                localStorage.setItem('msm_favorite', JSON.stringify(fav));
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Success',
                                    subTitle: 'Successfully added to Favorite list!',
                                    buttons: ['OK']
                                });
                                alert_1.present();
                            }
                            else {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'Warning',
                                    subTitle: 'Message already exist in Favorite list!',
                                    buttons: ['OK']
                                });
                                alert_2.present();
                            }
                        }
                        else {
                            //if not exist create a favorite
                            var arr = new Array();
                            arr.push(_this.msg);
                            localStorage.setItem('msm_favorite', JSON.stringify(arr));
                            var alert_3 = _this.alertCtrl.create({
                                title: 'Success',
                                subTitle: 'Successfully added to Favorite list!',
                                buttons: ['OK']
                            });
                            alert_3.present();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    MessagePage.prototype.unFavorite = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure you want to unfavorite this?',
            message: '',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        var messages = JSON.parse(localStorage.getItem("msm_favorite"));
                        for (var i = 0; i < messages.length; i++) {
                            if (_this.msg.id === messages[i].id) {
                                messages.splice(messages.indexOf(messages[i]), 1);
                                localStorage.setItem("msm_favorite", JSON.stringify(messages));
                            }
                        }
                    } // handler
                }
            ] // buttons
        });
        confirm.present();
    };
    MessagePage.prototype.isFavorite = function () {
        var fav = JSON.parse(localStorage.getItem("msm_favorite"));
        if (fav) {
            //check if the article is in favorite
            for (var i = 0; i < fav.length; i++) {
                if (this.msg.id === fav[i].id)
                    return true;
            }
        }
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/message/message.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <ion-title>{{msg.title}}</ion-title>\n        <ion-buttons end>\n            <button class="white" ion-button small clear (click)="share(msg)"><ion-icon name="share"></ion-icon></button>\n            <button class="white" ion-button small clear *ngIf="!isFavorite()" (click)="favorite()"><ion-icon name="star-outline"></ion-icon></button>\n            <button class="white" ion-button small clear *ngIf="isFavorite()" (click)="unFavorite()"><ion-icon name="star"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-row class="white-bg">\n        <ion-col>\n            <img src="{{this.imageUrl}}{{msg.picture}}" style="width: 100%">\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col>\n            <h1 class="title">{{msg.title}}</h1>\n            <p class="date">Published: {{msg.time_created | date}}</p>\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col style="width:100%">\n            <pre class="details">\n                {{msg.description}}\n            </pre>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsPage = /** @class */ (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    AboutUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about-us',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/about-us/about-us.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n      <button class="white" ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-row class="white-bg">\n      <ion-col>\n          <img src="assets/AboutUs.JPG" style="width:100%">\n      </ion-col>\n  </ion-row>\n  <ion-row class="white-bg" padding>\n      <ion-col>\n          <h1 class="title">Who We Are</h1>\n      </ion-col>\n  </ion-row>\n  <ion-row class="white-bg" padding>\n      <ion-col>\n          <p class="details">\n            Village Missionary Movement was started in 1996 by Brother K. David Ganesan. He could see Jesus and heard him cry and got the burden for the ministry and began to work. Many who have the same burden join together as a group beyond church denomination and work as a missionary movement.\n          </p>\n      </ion-col>\n  </ion-row>\n  <ion-row class="white-bg" padding>\n    <ion-col>\n        <h1 class="title">Our Vision</h1>\n    </ion-col>\n</ion-row>\n<ion-row class="white-bg" padding>\n    <ion-col>\n      <p class="details"> <i class="fa fa-arrows fa-1x"></i> As the verse, “Shepherd my Sheep” says children and youth in villages are reached and guided towards Jesus and through them gospel is taken to their villages.</p>\n      <p class="details"> <i class="fa fa-arrows fa-1x"></i> To mold the child and youth as the future leader and mission workers</p>\n      <p class="details"> <i class="fa fa-arrows fa-1x"></i> To make each Christian a soul winner</p>\n    </ion-col>\n</ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/about-us/about-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutUsPage);
    return AboutUsPage;
}());

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = /** @class */ (function () {
    function ContactUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/contact-us/contact-us.html"*/'<ion-header>\n    <ion-navbar transparent>\n        <button class="white" ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Contact Us</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n        <ion-card-header>\n            <div class="logoMenu"><img src="assets/logo.png" alt=""></div><br/>\n            <div style="text-align:center"><b>VILLAGE MISSIONARY MOVEMENT</b></div>\n        </ion-card-header>\n        <ion-row padding>\n            <ion-col align-self-center col-2><i class="fa fa-address-card-o fa-2x"></i></ion-col>\n            <ion-col align-self-center col-10>6/147,Malligai Street, Madurai Road, <br/>Virudhunagar-626001, TamilNadu, India</ion-col>\n        </ion-row>\n        <ion-row padding>\n                <ion-col align-self-center col-2><i class="fa fa-mobile fa-3x"></i></ion-col>\n                <ion-col align-self-center col-10><a href="tel:+919443565705">(+91) 94435 65705</a></ion-col>\n        </ion-row>\n        <ion-row padding>\n                <ion-col align-self-center col-2><i class="fa fa-envelope-o fa-2x"></i></ion-col>\n                <ion-col align-self-center col-10><a href="mailto:reachvmm@gmail.com" target="_top">reachvmm@gmail.com</a>;<br/>\n                    <a href="mailto:info@vmm.org.in" target="_top">info@vmm.org.in</a></ion-col>\n        </ion-row>\n        <ion-row padding>\n                <ion-col align-self-center col-2><i class="fa fa-globe fa-2x"></i></ion-col>\n                <ion-col align-self-center col-10><a href="http://vmm.org.in" target="_blank">http://vmm.org.in</a></ion-col>\n        </ion-row>\n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/contact-us/contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EventsPage = /** @class */ (function () {
    function EventsPage(navCtrl, service, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mode = "list";
        this.page = 0;
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].IMAGE_PATH;
        this.getAllEvents(0);
    }
    EventsPage.prototype.ionViewDidEnter = function () {
    };
    EventsPage.prototype.getAllEvents = function (refresher) {
        var _this = this;
        this.messages = [];
        var next = (this.page) * 20;
        this.service.getAllEvents(next).then(function (data) {
            _this.messages = data;
        });
        if (refresher != 0)
            refresher.complete();
    };
    EventsPage.prototype.getNext = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var next = (_this.page) * 20;
                _this.service.getAllEvents(next).then(function (data) {
                    _this.messages = _this.messages.concat(data);
                });
                if (infiniteScroll != 0)
                    infiniteScroll.complete();
            }, 2000);
        });
    };
    EventsPage.prototype.detail = function (message) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */], {
            message: message
        });
    };
    EventsPage.prototype.makelist = function () {
        this.mode = "list";
    };
    EventsPage.prototype.makecard = function () {
        this.mode = "card";
    };
    EventsPage.prototype.getEventDateTime = function (msgPayload) {
        if (msgPayload != '') {
            var payload_json = JSON.parse(msgPayload);
            if (payload_json.event_start_date && payload_json.event_end_date)
                return payload_json.event_start_date + ' to ' + payload_json.event_end_date;
            else if (payload_json.event_start_date)
                return payload_json.event_start_date;
            else
                return "";
        }
    };
    EventsPage.prototype.getEventPlace = function (msgPayload) {
        if (msgPayload != '') {
            var payload_json = JSON.parse(msgPayload);
            return payload_json.event_place;
        }
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/events/events.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <button class="white" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Events</ion-title>\n        <ion-buttons end>\n            <button class="white" ion-button small clear *ngIf="mode===\'card\'" (click)="makelist()"><ion-icon name="list"></ion-icon></button>\n            <button class="white" ion-button small clear *ngIf="mode===\'list\'" (click)="makecard()"><ion-icon name="grid"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list text-wrap *ngIf="mode===\'list\'">\n        <ion-item no-lines (click)="detail(msg)" *ngFor="let msg of messages">\n            <ion-thumbnail item-right>\n                <img src="{{this.imageUrl}}{{msg.picture}}" />\n            </ion-thumbnail>\n            <p class="date"><ion-icon name="md-plane"></ion-icon> {{getEventPlace(msg.message_payload)}}</p>\n            <p class="date"><ion-icon name="md-calendar"></ion-icon> {{getEventDateTime(msg.message_payload)}}</p>\n            <h2 class="title"><b>{{msg.title}}</b></h2>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="mode===\'card\'">\n        <ion-card (click)="detail(msg)" *ngFor="let msg of messages">\n\n            <ion-item>\n                <span class="positive">{{msg.time_created | date}}</span>\n                <h2 class="title"><b>{{msg.title}}</b></h2>\n            </ion-item>\n\n            <ion-card-content>\n                <img src="{{this.imageUrl}}{{msg.picture}}" class="img-card" />\n                <p class="details">{{msg.description.substr(0,100)}}...<a href="#">More</a></p>\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="getNext($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventPage = /** @class */ (function () {
    function EventPage(navCtrl, navParams, alertCtrl, sharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sharing = sharing;
        this.msg = navParams.get('message');
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].IMAGE_PATH;
    }
    EventPage.prototype.ionViewDidLoad = function () {
    };
    EventPage.prototype.share = function (message) {
        var _this = this;
        var imageFile = this.imageUrl + message.picture;
        this.sharing.share(message.description, message.title, imageFile, null).then(function () {
            /* let alert = this.alertCtrl.create({
                 title: 'Success', subTitle: 'Share succeed!',buttons: ['OK']
            });
            alert.present();*/
        }, function () {
            var alert = _this.alertCtrl.create({
                title: 'Error', subTitle: 'Share Failed!', buttons: ['OK']
            });
            alert.present();
        });
    };
    EventPage.prototype.getEventDateTime = function (msgPayload) {
        if (msgPayload != '') {
            var payload_json = JSON.parse(msgPayload);
            if (payload_json.event_start_date && payload_json.event_end_date)
                return payload_json.event_start_date + ' to ' + payload_json.event_end_date;
            else if (payload_json.event_start_date)
                return payload_json.event_start_date;
            else
                return "";
        }
    };
    EventPage.prototype.getEventPlace = function (msgPayload) {
        if (msgPayload != '') {
            var payload_json = JSON.parse(msgPayload);
            return payload_json.event_place;
        }
    };
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/event/event.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <ion-title>{{msg.title}}</ion-title>\n        <ion-buttons end>\n            <button class="white" ion-button small clear (click)="share(msg)"><ion-icon name="share"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class="white-bg">\n        <ion-col>\n            <img src="{{this.imageUrl}}{{msg.picture}}" style="width: 100%">\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col>\n            <h1 class="title">{{msg.title}}</h1>\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col>\n            <pre class="details">\n                {{msg.description}}\n            </pre>\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col>\n            <p class="date"><ion-icon name="md-plane"></ion-icon> {{getEventPlace(msg.message_payload)}}</p>\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col>\n            <p class="date"><ion-icon name="md-calendar"></ion-icon> {{getEventDateTime(msg.message_payload)}}</p>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/event/event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_message__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, service, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mode = "list";
        this.page = 0;
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].IMAGE_PATH;
        this.getAllMessages(0);
    }
    MessagesPage.prototype.ionViewWilEnter = function () {
    };
    MessagesPage.prototype.getAllMessages = function (refresher) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Getting latest messages...',
        });
        this.messages = [];
        var next = (this.page) * 20;
        loader.present().then(function () {
            _this.service.getAllMessages(next).then(function (data) {
                _this.messages = data;
            });
            loader.dismiss();
        });
        if (refresher != 0)
            refresher.complete();
    };
    MessagesPage.prototype.getNext = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var next = (_this.page) * 20;
                _this.service.getAllMessages(next).then(function (data) {
                    _this.messages = _this.messages.concat(data);
                });
                if (infiniteScroll != 0)
                    infiniteScroll.complete();
            }, 2000);
        });
    };
    MessagesPage.prototype.detail = function (message) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__message_message__["a" /* MessagePage */], {
            message: message
        });
    };
    MessagesPage.prototype.makelist = function () {
        this.mode = "list";
    };
    MessagesPage.prototype.makecard = function () {
        this.mode = "card";
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/messages/messages.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <button class="white" ion-button menuToggle><ion-icon name="menu"></ion-icon></button>\n        <ion-title>VMM Daily Devotion</ion-title>\n        <ion-buttons end>\n            <button class="white" ion-button small clear *ngIf="mode===\'card\'" (click)="makelist()"><ion-icon name="list"></ion-icon></button>\n            <button class="white" ion-button small clear *ngIf="mode===\'list\'" (click)="makecard()"><ion-icon name="grid"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list text-wrap *ngIf="mode===\'list\'">\n        <ion-item no-lines (click)="detail(msg)" *ngFor="let msg of messages">\n            <ion-thumbnail item-right>\n                <img src="{{this.imageUrl}}{{msg.picture}}" />\n            </ion-thumbnail>\n            <span class="category">{{msg.time_created | date}}</span>\n            <h2 class="title"><b>{{msg.title}}</b></h2>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="mode===\'card\'">\n        <ion-card (click)="detail(msg)" *ngFor="let msg of messages">\n            <ion-item>\n                <span class="positive">{{msg.time_created | date}}</span>\n                <h2 class="title"><b>{{msg.title}}</b></h2>\n            </ion-item>\n            <ion-card-content>\n                <img src="{{this.imageUrl}}{{msg.picture}}" class="img-card" />\n                <p class="details">{{msg.description.substr(0,100)}}...<a href="#">More</a></p>\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="getNext($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpecialMessagePage = /** @class */ (function () {
    function SpecialMessagePage(navCtrl, navParams, alertCtrl, sharing, loadingCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.sharing = sharing;
        this.loadingCtrl = loadingCtrl;
        this.domSanitizer = domSanitizer;
        this.msg = navParams.get('message');
    }
    SpecialMessagePage.prototype.ionViewDidLoad = function () {
        var temp_url = "https://www.youtube.com/embed/" + this.getVideoURL(this.msg.picture, 'v');
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(temp_url);
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    SpecialMessagePage.prototype.handleIFrameLoadEvent = function () {
        this.loading.dismiss();
    };
    SpecialMessagePage.prototype.share = function (message) {
        var _this = this;
        this.sharing.share(message.description + " " + message.picture, message.title, null, null).then(function () {
            /*let alert = this.alertCtrl.create({
                 title: 'Success', subTitle: 'Share succeed!', buttons: ['OK']
            });
            alert.present();*/
        }, function () {
            var alert = _this.alertCtrl.create({
                title: 'Error', subTitle: 'Share Failed!', buttons: ['OK']
            });
            alert.present();
        });
    };
    SpecialMessagePage.prototype.favorite = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'DO you want to add to Favorite?',
            message: '',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        confirm.present();
                        //check if favorite exist
                        var fav = JSON.parse(localStorage.getItem("msm_favorite"));
                        if (fav) {
                            var isexist = false;
                            //check if the article is in favorite
                            for (var i = 0; i < fav.length; i++) {
                                if (_this.msg.id === fav[i].id) {
                                    isexist = true;
                                }
                            }
                            //if exist add article to favorite
                            if (!isexist) {
                                fav.push(_this.msg);
                                localStorage.setItem('msm_favorite', JSON.stringify(fav));
                                var alert_1 = _this.alertCtrl.create({
                                    title: 'Success',
                                    subTitle: 'Successfully added to Favorite list!',
                                    buttons: ['OK']
                                });
                                alert_1.present();
                            }
                            else {
                                var alert_2 = _this.alertCtrl.create({
                                    title: 'Warning',
                                    subTitle: 'Message already exist in Favorite list!',
                                    buttons: ['OK']
                                });
                                alert_2.present();
                            }
                        }
                        else {
                            //if not exist create a favorite
                            var arr = new Array();
                            arr.push(_this.msg);
                            localStorage.setItem('msm_favorite', JSON.stringify(arr));
                            var alert_3 = _this.alertCtrl.create({
                                title: 'Success',
                                subTitle: 'Successfully added to Favorite list!',
                                buttons: ['OK']
                            });
                            alert_3.present();
                        }
                    }
                }
            ]
        });
        confirm.present();
    };
    SpecialMessagePage.prototype.getVideoURL = function (url, name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(url);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    SpecialMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-special-message',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/special-message/special-message.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <ion-title>{{msg.title}}</ion-title>\n        <ion-buttons end>\n            <button class="white" ion-button small clear (click)="share(msg)"><ion-icon name="share"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class="white-bg">\n        <ion-col>\n                <iframe width="100%" height="315" \n                        [src]="trustedVideoUrl ? trustedVideoUrl : null"\n                        (load)="trustedVideoUrl ? handleIFrameLoadEvent() : null"\n                        frameborder="0" allowfullscreen>\n                </iframe>\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col>\n            <h1 class="title">{{msg.title}}</h1>\n            <p class="date">Published: {{msg.time_created | date}}</p>\n        </ion-col>\n    </ion-row>\n    <ion-row class="white-bg" padding>\n        <ion-col>\n            <pre class="details">\n                {{msg.description}}\n            </pre>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/special-message/special-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SpecialMessagePage);
    return SpecialMessagePage;
}());

//# sourceMappingURL=special-message.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialMessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__special_message_special_message__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpecialMessagesPage = /** @class */ (function () {
    function SpecialMessagesPage(navCtrl, service, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.mode = "list";
        this.page = 0;
        this.getAllSpecialMessages(0);
    }
    SpecialMessagesPage.prototype.ionViewDidEnter = function () {
    };
    SpecialMessagesPage.prototype.getAllSpecialMessages = function (refresher) {
        var _this = this;
        this.messages = [];
        var next = (this.page) * 20;
        this.service.getAllVideoMessages(next).then(function (data) {
            _this.messages = data;
        });
        if (refresher != 0)
            refresher.complete();
    };
    SpecialMessagesPage.prototype.getNext = function (infiniteScroll) {
        var _this = this;
        this.page = this.page + 1;
        return new Promise(function (resolve) {
            setTimeout(function () {
                var next = (_this.page) * 20;
                _this.service.getAllVideoMessages(next).then(function (data) {
                    _this.messages = _this.messages.concat(data);
                });
                if (infiniteScroll != 0)
                    infiniteScroll.complete();
            }, 2000);
        });
    };
    SpecialMessagesPage.prototype.detail = function (message) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__special_message_special_message__["a" /* SpecialMessagePage */], {
            message: message
        });
    };
    SpecialMessagesPage.prototype.makelist = function () {
        this.mode = "list";
    };
    SpecialMessagesPage.prototype.makecard = function () {
        this.mode = "card";
    };
    SpecialMessagesPage.prototype.getVideoURL = function (url, name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(url);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };
    SpecialMessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-special-messages',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/special-messages/special-messages.html"*/'<ion-header no-border>\n    <ion-navbar transparent>\n        <button class="white" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Special Messages</ion-title>\n        <ion-buttons end>\n            <button class="white" ion-button small clear *ngIf="mode===\'card\'" (click)="makelist()"><ion-icon name="list"></ion-icon></button>\n            <button class="white" ion-button small clear *ngIf="mode===\'list\'" (click)="makecard()"><ion-icon name="grid"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list text-wrap *ngIf="mode===\'list\'">\n        <ion-item no-lines (click)="detail(msg)" *ngFor="let msg of messages">\n            <ion-thumbnail item-right>\n                <img src="http://img.youtube.com/vi/{{getVideoURL(msg.picture, \'v\')}}/default.jpg" />\n            </ion-thumbnail>\n            <span class="category">{{msg.time_created | date}}</span>\n            <h2 class="title"><b>{{msg.title}}</b></h2>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="mode===\'card\'">\n        <ion-card (click)="detail(msg)" *ngFor="let msg of messages">\n\n            <ion-item>\n                <span class="positive">{{msg.time_created | date}}</span>\n                <h2 class="title"><b>{{msg.title}}</b></h2>\n            </ion-item>\n\n            <ion-card-content>\n                <img src="http://img.youtube.com/vi/{{getVideoURL(msg.picture, \'v\')}}/default.jpg" class="img-card" />\n                <p class="details">{{msg.description.substr(0,100)}}...<a href="#">More</a></p>\n            </ion-card-content>\n        </ion-card>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="getNext($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/special-messages/special-messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SpecialMessagesPage);
    return SpecialMessagesPage;
}());

//# sourceMappingURL=special-messages.js.map

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		288,
		8
	],
	"../pages/contact-us/contact-us.module": [
		289,
		7
	],
	"../pages/event/event.module": [
		291,
		6
	],
	"../pages/events/events.module": [
		290,
		5
	],
	"../pages/favorite/favorite.module": [
		292,
		0
	],
	"../pages/message/message.module": [
		293,
		4
	],
	"../pages/messages/messages.module": [
		294,
		3
	],
	"../pages/special-message/special-message.module": [
		295,
		2
	],
	"../pages/special-messages/special-messages.module": [
		296,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 164;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_message_message__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_special_messages_special_messages__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_special_message_special_message__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_events_events__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_event_event__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_us_contact_us__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_us_about_us__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_special_messages_special_messages__["a" /* SpecialMessagesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_special_message_special_message__["a" /* SpecialMessagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_us_about_us__["a" /* AboutUsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event/event.module#EventPageModule', name: 'EventPage', segment: 'event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite/favorite.module#FavoriteModule', name: 'Favorite', segment: 'favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/special-message/special-message.module#SpecialMessagePageModule', name: 'SpecialMessagePage', segment: 'special-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/special-messages/special-messages.module#SpecialMessagesPageModule', name: 'SpecialMessagesPage', segment: 'special-messages', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_special_messages_special_messages__["a" /* SpecialMessagesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_special_message_special_message__["a" /* SpecialMessagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_us_contact_us__["a" /* ContactUsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_us_about_us__["a" /* AboutUsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__providers_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_events_events__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_special_messages_special_messages__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */];
        this.initializeApp();
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { icon: 'fa fa-list', title: 'VMM Daily Devotion', component: __WEBPACK_IMPORTED_MODULE_5__pages_messages_messages__["a" /* MessagesPage */] },
            { icon: 'fa fa-video-camera', title: 'Special Messages', component: __WEBPACK_IMPORTED_MODULE_7__pages_special_messages_special_messages__["a" /* SpecialMessagesPage */] },
            { icon: 'fa fa-calendar', title: 'Events', component: __WEBPACK_IMPORTED_MODULE_6__pages_events_events__["a" /* EventsPage */] },
            { icon: 'fa fa-heart', title: 'Favorites', component: 'Favorite' },
            { icon: 'fa fa-address-card', title: 'Contact Us', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_us_contact_us__["a" /* ContactUsPage */] },
            { icon: 'fa fa-users', title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_us_about_us__["a" /* AboutUsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.oneSignal.startInit('e078180f-bd0d-422e-b87d-0287113db9fd', '601151014458');
            //this.oneSignal.setLogLevel({logLevel: 6, visualLevel: 6});
            _this.oneSignal.inFocusDisplaying(_this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            /*this.oneSignal.handleNotificationReceived().subscribe(() => {
              console.log("KKKKKKKKKKK handleNotificationReceived().subscribe");
            });
      
            this.oneSignal.handleNotificationOpened().subscribe(() => {
              console.log("KKKKKKKKKKK handleNotificationOpened().subscribe");
            });*/
            _this.oneSignal.endInit();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/app/app.html"*/'<ion-menu secondary [content]="content">\n    <ion-header>\n        <ion-toolbar class="menuHeader">\n            <div class="logoMenu"><img src="assets/logo.png" alt=""></div>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="menuContent">\n        <ion-list no-lines>\n          <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <i class="fa {{p.icon}} fa-1x"></i>        {{p.title}}\n      </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    API_ENDPOINT: 'http://herald-globe.com/MSMWeb/api',
    IMAGE_PATH: 'http://herald-globe.com/MSMWeb/views/images/'
};
//# sourceMappingURL=config.dev.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environment__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Service = /** @class */ (function () {
    function Service(http) {
        this.http = http;
        //when you use an api, user baseUrl to link your app with your server
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__environment__["a" /* ENV */].API_ENDPOINT;
    }
    Service.prototype.getAllMessages = function (start, count) {
        var _this = this;
        if (count === void 0) { count = 20; }
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/read_all_daily_messages.php?count=' + count + '&start=' + start).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    Service.prototype.getAllVideoMessages = function (start, count) {
        var _this = this;
        if (count === void 0) { count = 20; }
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/read_all_video_messages.php?count=' + count + '&start=' + start).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    Service.prototype.getAllEvents = function (start, count) {
        var _this = this;
        if (count === void 0) { count = 20; }
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/read_all_events.php?count=' + count + '&start=' + start).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    Service.prototype.getMessage = function (message_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/read.php?id=' + message_id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map