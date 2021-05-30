import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  ID: number;
  title: string;
  project: number;
  Status: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ID: 1, name: 'Pema Wangchuk',title: 'UI', project: 3, Status: 'Active'},
  {ID: 2, name: 'Tashi Tobgyel',title: 'UX', project: 5, Status: 'Active'},
  {ID: 3, name: 'Sonam Choden',title: 'BA', project: 2, Status: 'Active'},
  {ID: 4, name: 'Chimi Yangden',title: 'UX', project: 1, Status: 'Active'},
  {ID: 5, name: 'Tshering Choki',title: 'UI', project: 1, Status: 'Inactive'},
  {ID: 6, name: 'Tashi Wangdi',title: 'BE',project: 1, Status: 'Active'},
  {ID: 7, name: 'Pema Yangki',title: 'UI', project: 4, Status: 'Active'},
  {ID: 8, name: 'Dorji Wangchuk',title: 'UX', project: 5, Status: 'Active'},
  {ID: 9, name: 'Thirchen Khentse', title: 'FE',project: 5, Status: 'Inactive'},
  {ID: 10, name: 'Dawa', project: 2, title: 'FE',Status: 'Active'},
];
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'name', 'project', 'title', 'Status'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
