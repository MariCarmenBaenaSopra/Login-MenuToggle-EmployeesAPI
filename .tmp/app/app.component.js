var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EmployeesPage } from './../pages/employees/employees';
import { HomePage } from './../pages/home/home';
import { ListPage } from './../pages/list/list';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { Auth } from '@ionic/cloud-angular';
export var MyApp = (function () {
    function MyApp(platform, /**Platform      --> obtener informacion sobre el dispositivo que se esta usando (tablet, mv, etc) */ auth, /**auth           --> autentificacion email/password */ menu /**MenuController --> proveedor que facilita el control de 1 menu */) {
        var _this = this;
        this.platform = platform;
        this.auth = auth;
        this.menu = menu;
        this.rootPage = LoginPage;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Floor 2', component: ListPage },
            { title: 'Floor 3', component: ListPage },
            { title: 'Floor 8', component: ListPage },
            { title: 'Floor 9', component: ListPage }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
            if (_this.auth.isAuthenticated()) {
            }
            else {
                _this.rootPage = LoginPage;
            }
        });
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close(); /**cerrar el menu (menuToggle) */
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.return = function () {
        this.menu.close(); /**cerrar el menu (menuToggle)*/
        this.nav.setRoot(HomePage); /**Enviar a la pagina deseada = HomePage */
    };
    MyApp.prototype.employees = function () {
        this.menu.close(); /**cerrar el menu (menuToggle)*/
        this.nav.setRoot(EmployeesPage); /**Enviar a la pagina deseada = EmployeesPage */
    };
    __decorate([
        ViewChild(Nav), 
        __metadata('design:type', Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            selector: 'page-app',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>MenuToggle</ion-title>\n       <ion-buttons end>\n         <button class="button-style" (click)="return()">\n          <ion-icon name="ios-arrow-back-outline"></ion-icon>\n         </button>\n       </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button ion-item (click)="employees()"> Employees </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [Platform, Auth, MenuController])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map