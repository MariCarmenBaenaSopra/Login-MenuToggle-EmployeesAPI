var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the EmployeesService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var EmployeesService = (function () {
    function EmployeesService(http) {
        this.http = http;
        this.data = null;
    }
    EmployeesService.prototype.load = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data); /**Datos cargados */
        }
        return new Promise(function (resolve) {
            _this.http.get('https://randomuser.me/api/?results=10')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data.results;
                resolve(_this.data);
            });
        });
    };
    EmployeesService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof Http !== 'undefined' && Http) === 'function' && _a) || Object])
    ], EmployeesService);
    return EmployeesService;
    var _a;
}());
//# sourceMappingURL=employees-service.js.map