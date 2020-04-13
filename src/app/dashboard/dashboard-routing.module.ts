import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddTodoComponent } from './add-todo/add-todo.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: 'add-todo', component: AddTodoComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
