var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EmployeesService } from './../../providers/employees-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Employees page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var EmployeesPage = (function () {
    function EmployeesPage(employeesService, navCtrl, navParams) {
        this.employeesService = employeesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadEmployees();
    }
    EmployeesPage.prototype.loadEmployees = function () {
        var _this = this;
        this.employeesService.load()
            .then(function (data) {
            _this.employee = data;
        });
    };
    EmployeesPage = __decorate([
        Component({
            selector: 'page-employees',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/employees/employees.html"*/'<!--\n  Generated template for the Employees page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle class="style-color">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Employees</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="home">\n  <ion-list>\n    <ion-item *ngFor="let employees of employee">\n      <ion-avatar item-left>\n        <img src="{{employees.picture.thumbnail}}">\n      </ion-avatar>\n      <h2>{{employees.name.first}} {{employees.name.last}}</h2>\n      <p>{{employees.email}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/employees/employees.html"*/,
            providers: [EmployeesService]
        }), 
        __metadata('design:paramtypes', [EmployeesService, NavController, NavParams])
    ], EmployeesPage);
    return EmployeesPage;
}());
//# sourceMappingURL=employees.js.map