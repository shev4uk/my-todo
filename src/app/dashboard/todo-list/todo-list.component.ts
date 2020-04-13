import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe(res => {
      this.todos = res;
      console.log(res);
    });
  }

  removeTodo(id) {
    this.todoService.removeTodo(id);
  }

  updateStateTodo(todo) {
    this.todoService.updateStateTodo(todo);
  }

}
