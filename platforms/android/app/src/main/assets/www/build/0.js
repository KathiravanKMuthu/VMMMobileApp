webpackJsonp([0],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteModule", function() { return FavoriteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorite__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FavoriteModule = /** @class */ (function () {
    function FavoriteModule() {
    }
    FavoriteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* Favorite */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* Favorite */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__favorite__["a" /* Favorite */]
            ]
        })
    ], FavoriteModule);
    return FavoriteModule;
}());

//# sourceMappingURL=favorite.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_messages__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Favorite = /** @class */ (function () {
    function Favorite(navCtrl, navParams, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.mode = "list";
        this.imageUrl = __WEBPACK_IMPORTED_MODULE_2__environment__["a" /* ENV */].IMAGE_PATH;
    }
    Favorite.prototype.ionViewDidEnter = function () {
        this.getFavorite();
        var messages = JSON.parse(localStorage.getItem("msm_favorite"));
        if (messages == null || messages.length <= 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Info', subTitle: "Your favorite list is empty !!!", buttons: ['OK'], cssClass: "customLoader"
            });
            alert_1.present();
        }
        this.initializeBackButtonCustomHandler();
    };
    Favorite.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    Favorite.prototype.initializeBackButtonCustomHandler = function () {
        var _this = this;
        this.unregisterBackButtonAction = this.platform.registerBackButtonAction(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__messages_messages__["a" /* MessagesPage */]);
            _this.navCtrl.popToRoot();
        }, 10);
    };
    Favorite.prototype.detail = function (message) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__message_message__["a" /* MessagePage */], {
            message: message
        });
    };
    Favorite.prototype.delete = function (item) {
        var messages = JSON.parse(localStorage.getItem("msm_favorite"));
        for (var i = 0; i < messages.length; i++) {
            if (item.id === messages[i].id) {
                messages.splice(messages.indexOf(messages[i]), 1);
                localStorage.setItem("msm_favorite", JSON.stringify(messages));
                this.messages = messages;
                /*let alert = this.alertCtrl.create({
                             title: 'Success', subTitle: 'Successfully removed from Favorite list!', buttons: ['OK'], cssClass: "customLoader"
                });
  
                alert.present();*/
            } // if
        } // for
    };
    Favorite.prototype.getFavorite = function () {
        //find favorite in localStorage
        this.messages = JSON.parse(localStorage.getItem("msm_favorite"));
    };
    Favorite.prototype.makelist = function () {
        this.mode = "list";
    };
    Favorite.prototype.makecard = function () {
        this.mode = "card";
    };
    Favorite = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite',template:/*ion-inline-start:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/favorite/favorite.html"*/'<ion-header>\n    <ion-navbar transparent>\n        <button class="white" ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Favorite</ion-title>\n        <ion-buttons end>\n            <button class="white" ion-button small clear *ngIf="mode===\'card\'" (click)="makelist()"><ion-icon name="list"></ion-icon></button>\n            <button class="white" ion-button small clear *ngIf="mode===\'list\'" (click)="makecard()"><ion-icon name="grid"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="back">\n    <ion-list text-wrap *ngIf="mode===\'list\'">\n        <ion-item no-lines *ngFor="let msg of messages">\n            <ion-thumbnail item-right>\n              <img src="{{this.imageUrl}}{{msg.picture}}" />\n            </ion-thumbnail>\n            <span class="positive">{{msg.time_created | date}}</span>\n            <h2 class="title"><b>{{msg.title}}</b></h2>\n            <button ion-button clear (click)="detail(msg)"> <ion-icon style="font-size: 30px;" name="eye"></ion-icon> </button>\n            <button ion-button clear (click)="delete(msg)"> <ion-icon style="font-size: 30px;" name="star"></ion-icon> </button>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngIf="mode===\'card\'">\n        <ion-card *ngFor="let msg of messages">\n            <ion-item>\n              <span class="postive">{{msg.time_created | date}}</span>\n                <h2><b>{{msg.title}}</b></h2>\n            </ion-item>\n            <ion-card-content>\n              <img src="{{this.imageUrl}}{{msg.picture}}" class="img-card" />\n                <p class="details">{{msg.description}}</p>\n            </ion-card-content>\n            <ion-item>\n              <button ion-button clear (click)="detail(msg)"> <ion-icon style="font-size: 30px;" name="eye"></ion-icon> </button>\n              <button ion-button clear (click)="delete(msg)"> <ion-icon style="font-size: 30px;" name="star"></ion-icon> </button>\n            </ion-item>\n        </ion-card>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/kkadarkaraimuthu/MyProjects/VMMApp/src/pages/favorite/favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], Favorite);
    return Favorite;
}());

//# sourceMappingURL=favorite.js.map

/***/ })

});
//# sourceMappingURL=0.js.map