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
import { ComponentPage } from './../pages/component/component';
import { ItemDetailsPage } from './../pages/item-details/item-details';
import { ListPage } from './../pages/list/list';
import { NgModule } from '@angular/core';
import { CloudModule } from '@ionic/cloud-angular';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';
var cloudSettings = {
    'core': {
        'app_id': '013473e5'
    }
};
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                HomePage,
                LoginPage,
                ListPage,
                ItemDetailsPage,
                ComponentPage,
                EmployeesPage
            ],
            imports: [
                HttpModule,
                IonicModule.forRoot(MyApp),
                CloudModule.forRoot(cloudSettings)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                HomePage,
                LoginPage,
                ListPage,
                ItemDetailsPage,
                ComponentPage,
                EmployeesPage],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map