import { Component, OnInit } from '@angular/core';
import {Todo} from './../../Models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
 
  inputTodo:string="";
  todos: Todo[] = [];
 
  constructor() { }

  ngOnInit(): void {

    this.todos=[
      {
        content:'First Todo',
        completed:true

      },
      {
        content:'Second Todo',
        completed:false

      }
    ]
  }

  toggleDone(id:number) {
    this.todos.map((v,i)=>{
    if(i==id) v.completed =!v.completed;
    return v;
  });

  }

  deleteTodo(id:number){
    this.todos=this.todos.filter((v,i)=>i !== id);
  }

  addTodo(){
    this.todos.push({
      completed:false,
      content: this.inputTodo
    });

    this.inputTodo="";
  }
}
