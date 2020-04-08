import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private readonly afs: AngularFirestore
  ) { }

  addTodo(todo) {
    const id = this.afs.createId();
    console.log(todo, id)
    this.afs.collection<Todo>('todos').doc(id).set(todo);
  }
}
