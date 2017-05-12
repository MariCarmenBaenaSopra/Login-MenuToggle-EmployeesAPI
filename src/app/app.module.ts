import { EmployeesPage } from './../pages/employees/employees';
import { ComponentPage } from './../pages/component/component';
import { ItemDetailsPage } from './../pages/item-details/item-details';
import { ListPage } from './../pages/list/list';
import { NgModule } from '@angular/core';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpModule } from '@angular/http';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '013473e5'
  }
};

@NgModule({
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
    EmployeesPage  ],
  providers: []
})
export class AppModule {}
