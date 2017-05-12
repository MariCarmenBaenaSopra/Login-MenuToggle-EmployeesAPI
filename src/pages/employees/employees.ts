import { EmployeesService } from './../../providers/employees-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/*
  Generated class for the Employees page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
  providers: [ EmployeesService ]
})
export class EmployeesPage {
  public employee:any;

  constructor(
    public employeesService: EmployeesService,
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.loadEmployees();
    }
  
  loadEmployees() {
    this.employeesService.load()
      .then(data => {
        this.employee = data;
      })
  }
}
