import { Component } from '@angular/core';
import { ToDo } from './Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: ToDo[] = [];
  newtodo!: string;

  saveTodo(){
    if(this.newtodo){
      let todo = new ToDo();
      todo.name = this.newtodo;
      todo.IsCompleted = true;
      this.todos.push(todo);
      this.newtodo = "";
    }else{
      alert("Please, Enter To do");
    }
  }

  done(id:number):void{
    this.todos[id].IsCompleted = !this.todos[id].IsCompleted;
  }

  remove(id:number):void{
    this.todos = this.todos.filter((v,i) => i != id);
  }
}
