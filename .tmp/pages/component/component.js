var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var ComponentPage = (function () {
    function ComponentPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ComponentPage = __decorate([
        Component({
            selector: 'page-component',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/component/component.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="style-color">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Component </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 class="style-header"><strong><i>Component Element</i></strong></h2>\n\n  <p class="style-text"><i>\n    The component site.\n  </i></p>\n\n</ion-content>\n'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/component/component.html"*/
        }), 
        __metadata('design:paramtypes', [NavController])
    ], ComponentPage);
    return ComponentPage;
}());
//# sourceMappingURL=component.js.map