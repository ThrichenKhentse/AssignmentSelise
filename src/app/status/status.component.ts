import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  status: string;
  developer: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Name of Project', status: 'complete', developer: 1},
  {position: 2, name: 'Name of Project', status: 'complete', developer: 1},
  {position: 3, name: 'Name of Project', status: 'process', developer: 4},
  {position: 4, name: 'Name of Project', status: 'process', developer: 4},
  {position: 5, name: 'Name of Project', status: 'inactive', developer: 0},
  {position: 6, name: 'Name of Project', status: 'inactive', developer: 0},
  {position: 7, name: 'Name of Project', status: 'process', developer: 5},
  {position: 8, name: 'Name of Project', status: 'complete', developer: 2},
  {position: 9, name: 'Name of Project', status: 'complete', developer: 2},
  {position: 10, name: 'Name of Project', status: 'complete', developer: 2},
];

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'status', 'developer'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
