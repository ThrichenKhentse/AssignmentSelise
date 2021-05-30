import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  ID: number;
  title: string;
  project: number;
  Status: string;
}
export interface RoomData {
  time: string;
  title: string;
  hours: number;
}
export interface Interview {
  ID: number,
  name: string,
  interviewerName: string,
  title: string,
  time: string,


}
const EMPOYEE_DATA: PeriodicElement[] = [
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
const ROOM_DATA: RoomData[] = [
  { time: '9:00 AM',title: 'Meeting', hours: 1},
  { time: '9:30 AM',title: 'Interview', hours: 5},
  { time: '10:00 AM',title: 'Meeting', hours: 2},
  { time: '11:00 AM',title: 'Interview', hours: 1},
  { time: '11:30 AM',title: 'Meeting',hours: 1},
  { time: '12:00',title: 'Meeting', hours: 4},
  { time: '3:00 PM',title: 'Meeting', hours: 4},
  { time: '3:30 PM',title: 'Meeting', hours: 4},
  { time: '4:30 PM',title: 'Interview', hours: 4},
];
const INTERVIEW_DATA: Interview[] = [
  {ID: 1, name: 'Pema Wangchuk', interviewerName: 'Wangchuk',title: 'UI', time: '9:30 AM'},
  {ID: 2, name: 'Tashi Tobgyel', interviewerName: 'Wangchuk',title: 'UX', time: '10:30 AM'},
  {ID: 3, name: 'Sonam Choden',interviewerName: 'Wangchuk',title: 'BA',  time: '11:30 AM'},
  {ID: 4, name: 'Chimi Yangden',interviewerName: 'Wangchuk',title: 'UX', time: '12:30 AM'},
  {ID: 5, name: 'Tshering Choki',interviewerName: 'Wangchuk',title: 'UI', time: '1:30PM'},
  {ID: 6, name: 'Tashi Wangdi', interviewerName: 'Wangchuk',title: 'BE', time: '2:30 PM'},
  {ID: 7, name: 'Pema Yangki', interviewerName: 'Wangchuk',title: 'UI',  time: '3:30 PM'},
  {ID: 8, name: 'Dorji Wangchuk',interviewerName: 'Wangchuk',title: 'UX', time: '4:30 PM'},
  {ID: 9, name: 'Thirchen Khentse', interviewerName: 'Wangchuk', title: 'FE', time: '5:30PM'},
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'title', 'project', 'status'];
  dataSource = EMPOYEE_DATA;

  displayedColumnsRoom: string[] = [ 'name', 'title'];
  dataSourceRoom = ROOM_DATA;

  displayedColumnsInterview: string[] = ['position', 'name', 'title', 'interviewerName', 'time'];
  dataSourceInterview = INTERVIEW_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
