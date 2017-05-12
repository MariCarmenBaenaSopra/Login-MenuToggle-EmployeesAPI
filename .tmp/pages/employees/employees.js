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
export var EmployeesPage = (function () {
    function EmployeesPage(employeesService, navCtrl, navParams) {
        this.employeesService = employeesService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchTerm = '';
        this.loadEmployees();
    }
    /**LOAD LIST EMPLOYEES FROM API */
    EmployeesPage.prototype.loadEmployees = function () {
        var _this = this;
        this.employeesService.load()
            .then(function (data) {
            _this.employee = data;
            _this.list = _this.employee;
        });
    };
    /**SEARCH */
    EmployeesPage.prototype.filterItems = function (searchTerm) {
        return this.list.filter(function (employee) {
            return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    EmployeesPage.prototype.setFilteredItems = function () {
        if (this.searchTerm != '') {
            this.employee = this.filterItems(this.searchTerm);
        }
        else {
            this.employee = this.list;
        }
    };
    EmployeesPage = __decorate([
        Component({
            selector: 'page-employees',template:/*ion-inline-start:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/employees/employees.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="style-color">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Employees</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home">\n  <ion-searchbar [(ngModel)]="searchTerm" (ionInput)="setFilteredItems()"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let employees of employee">\n      <ion-avatar item-left>\n        <img src="{{employees.picture.thumbnail}}">\n      </ion-avatar>\n      <h2>{{employees.name.first}} {{employees.name.last}}</h2>\n      <p>{{employees.email}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/home/maricarmensopra/Escritorio/ionic2/login+menu+employeesAPI/src/pages/employees/employees.html"*/,
            providers: [EmployeesService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof EmployeesService !== 'undefined' && EmployeesService) === 'function' && _a) || Object, (typeof (_b = typeof NavController !== 'undefined' && NavController) === 'function' && _b) || Object, (typeof (_c = typeof NavParams !== 'undefined' && NavParams) === 'function' && _c) || Object])
    ], EmployeesPage);
    return EmployeesPage;
    var _a, _b, _c;
}());
//# sourceMappingURL=employees.js.map