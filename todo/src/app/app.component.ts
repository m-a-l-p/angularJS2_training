import { Component } from '@angular/core';

const TODOS = [
  'Todo 1',
  'Todo 2',
  'Todo 3'
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo';
  newTodo:string;
  todos:Array<string>;

  constructor() {
    this.todos = TODOS;
  }

  removeTodo(index: number) {
    this.todos.splice(index,1);
  }

  addTodo() {
    if (this.newTodo)
      this.todos.push(this.newTodo);
    this.newTodo = '';
  }
}
