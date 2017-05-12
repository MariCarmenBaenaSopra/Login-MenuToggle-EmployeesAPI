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
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
export var LoginPage = (function () {
    function LoginPage(navCtrl, auth, user, alertCtrl, loadingCtrl /**Una superposición que puede usarse para indicar actividad mientras bloquea la interacción del usuario. */) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.user = user;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.showLogin = true;
        this.email = '';
        this.password = '';
        this.name = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage Page');
    };
    /*
    for both of these, if the right form is showing, process the form,
    otherwise show it
    */
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.showLogin) {
            console.log('process login');
            if (this.email === '' || this.password === '') {
                var alert_1 = this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: 'All fields are required',
                    buttons: ['OK']
                });
                alert_1.present(); /**Mostrar la alerta */
                return;
            }
            var loader_1 = this.loadingCtrl.create({
                content: "Logging in..."
            });
            loader_1.present();
            this.auth.login('basic', { 'email': this.email, 'password': this.password }).then(function () {
                console.log('ok i guess?');
                loader_1.dismissAll();
                _this.navCtrl.setRoot(HomePage); /*Para cambiar de pantalla */
            }, function (err) {
                loader_1.dismissAll();
                console.log(err.message);
                var errors = '';
                if (err.message === 'UNPROCESSABLE ENTITY')
                    errors += 'Email isn\'t valid.<br/>';
                if (err.message === 'UNAUTHORIZED')
                    errors += 'Password is required.<br/>';
                var alert = _this.alertCtrl.create({
                    title: 'Login Error',
                    subTitle: errors,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            this.showLogin = true;
        }
    };
    LoginPage.prototype.doRegister = function () {
        var _this = this;
        if (!this.showLogin) {
            console.log('process register');
            /*
            do our own initial validation
            */
            if (this.name === '' || this.email === '' || this.password === '') {
                var alert_2 = this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: 'All fields are rquired',
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
            var details_1 = { 'email': this.email, 'password': this.password, 'name': this.name };
            console.log(details_1);
            var loader_2 = this.loadingCtrl.create({
                content: "Registering your account..."
            });
            loader_2.present();
            this.auth.signup(details_1).then(function () {
                console.log('ok signup');
                _this.auth.login('basic', { 'email': details_1.email, 'password': details_1.password }).then(function () {
                    loader_2.dismissAll();
                    _this.navCtrl.setRoot(HomePage);
                });
            }, function (err) {
                loader_2.dismissAll();
                var errors = '';
                for (var _i = 0, _a = err.details; _i < _a.length; _i++) {
                    var e = _a[_i];
                    console.log(e);
                    if (e === 'required_email')
                        errors += 'Email is required.<br/>';
                    if (e === 'required_password')
                        errors += 'Password is required.<br/>';
                    if (e === 'conflict_email')
                        errors += 'A user with this email already exists.<br/>';
                    //don't need to worry about conflict_username
                    if (e === 'invalid_email')
                        errors += 'Your email address isn\'t valid.';
                }
                var alert = _this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: errors,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            this.showLogin = false;
        }
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/login/login.html"*/'<!--\n  Generated template for the Login page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login/Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div *ngIf="showLogin">\n    <ion-item>\n      <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </div>\n\n  <div *ngIf="!showLogin">\n\n    <ion-item>\n      <ion-input type="text" placeholder="Name" [(ngModel)]="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="email" placeholder="Email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </div>\n\n  <button ion-button color="primary" full (click)="doLogin()" class="style-login">Login</button>\n  <button ion-button color="primary" full (click)="doRegister()" class="style-login">Register</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/login/login.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, Auth, User, AlertController, LoadingController])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map