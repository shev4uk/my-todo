import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Priority } from '../todo.model';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  serverError: string = '';
  // priority = Priority;
  // priority = [
  //   {
  //     name: 'Low', value: 1
  //   },
  //   {
  //     name: 'Middle', value: 2
  //   },
  //   {
  //     name: 'High', value: 3
  //   }
  // ];

  addTodoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addTodoForm = this.fb.group({
      name: ['', [Validators.required]],
      priority: ['', [Validators.required]]
    })
  }

  addTodo() {
    this.todoService.addTodo(this.addTodoForm.value)
      .then((res)=> {
        console.log(res);
        this.router.navigate(['dashboard']);
      })
      .catch((er) => {
        console.log(er);
        this.serverError = er.message;
      });
  }

}
