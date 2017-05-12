import { EmployeesService } from './../../providers/employees-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
  providers: [EmployeesService]
})
export class EmployeesPage {
  searchTerm: string = '';
  employee: Array<{ name: { first: string, last: string }, picture: { thumbnail: string } }>
  list: Array<{ name: { first: string, last: string }, picture: { thumbnail: string } }>

  constructor(
    public employeesService: EmployeesService,
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.loadEmployees();
  }

/**LOAD LIST EMPLOYEES FROM API */
  loadEmployees() {
    this.employeesService.load()
      .then(data => {
        this.employee = data;
        this.list = this.employee;
      })
  }

/**SEARCH */
  filterItems(searchTerm) {
    return this.list.filter((employee) => {
      return employee.name.first.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems() {
    if (this.searchTerm != '') {
      this.employee = this.filterItems(this.searchTerm);
    } else {
      this.employee = this.list;
    }
  }

}
