var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ComponentPage } from './../component/component';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
export var ItemDetailsPage = (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage.prototype.component = function () {
        this.navCtrl.setRoot(ComponentPage);
    };
    ItemDetailsPage.prototype.seat = function () {
    };
    ItemDetailsPage = __decorate([
        Component({
            selector: 'page-item-details',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/item-details/item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem" class="button-style">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Rooms Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <!--<h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>-->\n  <button (click)="seat()"> \n    <ion-icon name="md-laptop" class="style-laptop"></ion-icon>\n    <ion-icon name="md-laptop" class="style-laptop"></ion-icon>\n    <ion-icon name="md-laptop" class="style-laptop"></ion-icon>\n  </button>\n  <button class="style-button-details" (click)="component()"> \n    <ion-icon name="md-body"></ion-icon>\n  </button>\n</ion-content>\n'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/item-details/item-details.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, NavParams])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());
//# sourceMappingURL=item-details.js.map