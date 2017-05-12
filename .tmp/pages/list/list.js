var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
export var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['archive', 'attach', 'briefcase', 'contacts'];
        this.items = [];
        for (var i = 1; i < 10; i++) {
            this.items.push({
                title: 'Room ' + i,
                note: 'This is room #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(ItemDetailsPage, {
            item: item
        });
    };
    ListPage.prototype.init = function () {
        this.navCtrl.setRoot(HomePage);
    };
    ListPage = __decorate([
        Component({
            selector: 'page-list',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="color-style">  <!--boton del menu-->\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Seating</ion-title>\n    <button class="button-style" (click)="init()">  <!--si cierras en el boton, te manda a la funcion init(): envia a HomePage-->\n      <ion-icon name="md-close" item-right></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/list/list.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, NavParams])
    ], ListPage);
    return ListPage;
}());
//# sourceMappingURL=list.js.map