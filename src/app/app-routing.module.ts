import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { ToDoComponent } from './to-do/to-do.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', component: DashboardComponent},
      {path: 'toDo', component: ToDoComponent},
      {path: 'employee', component: EmployeeComponent},
      {path: 'status', component: StatusComponent},

    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
