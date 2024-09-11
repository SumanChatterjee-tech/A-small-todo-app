import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:any;
  objChangedTodo:any={"description":"","targetDate":new Date()};
  constructor(private route:Router,private activatedRoute:ActivatedRoute,private welcomeService: WelcomeDataService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.id = data['id'];
      if(this.id != -1){
      this.welcomeService.getATodo(this.id).subscribe(objTodo=>{
        this.objChangedTodo= objTodo;
      });
    }
    });
   
  }

  saveTodo(form: NgForm) {
    console.log(form);
    if (form.valid) {
      if (this.id != -1) {
        this.welcomeService.updateATodo(this.id, this.objChangedTodo).subscribe(data => {
          this.route.navigate(['/todo']);
        });
      }
      else {
        this.welcomeService.createTodo(this.objChangedTodo).subscribe(data => {
          console.log(data);
        });
      }
    }
  }

}
