import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
  }

  addTodo() {
    console.log('add');
    this.todoService.addTodo({
      name: 'test', 
      priority: 1, 
      authorId: 'PTphuwoYEnXiAkT95TOXnEz4mCr2',
      date: new Date()
    });
  }

}
