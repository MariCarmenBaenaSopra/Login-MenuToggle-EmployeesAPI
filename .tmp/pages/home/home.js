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
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';
export var HomePage = (function () {
    /**Nav: NavController --> componente de navegacion */
    /**auth --> autentificacion email/password */
    function HomePage(navCtrl, user, auth) {
        this.navCtrl = navCtrl;
        this.user = user;
        this.auth = auth;
        console.log(user);
    }
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(LoginPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="style-color">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Home </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()" class="style-icon-close">   <!--boton para cerrar sesion-->\n        <ion-icon name="exit"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2 class="style-header"><strong><i>Welcome back, {{ user.details.name }}</i></strong></h2>\n\n  <p class="style-text"><i>\n    Selection of seats according to worker.\n  </i></p>\n  <p>\n    **************************************************************\n  </p>\n  <p>\n    <!--<button ion-button color="primary" menuToggle>Toggle Menu</button>-->\n  </p>\n</ion-content>\n'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, User, Auth])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map