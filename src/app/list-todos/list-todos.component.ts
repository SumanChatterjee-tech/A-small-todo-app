import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

export class Todo{
  constructor(public id:number, public description:string, public done:boolean, public targetDate:Date){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:any;
  name:String;
  deleteMessage:String="";
  constructor(private route:Router,private activeRoute:ActivatedRoute,private welcomeDataService: WelcomeDataService) { }

  ngOnInit(): void {
    this.deleteMessage="";
    this.activeRoute.params.subscribe(name=>{
      this.name = name['name'];
    })
    this.welcomeDataService.executeHelloWorldService(this.name).subscribe(data=>{
     this.todos = data;
    },
    error=>{
       console.log("Error Occured!");
    });
  }

  toDoDelete(id, description:String){
   this.welcomeDataService.deleteTodo(id).subscribe(data=>{
     if(data){
       this.deleteMessage = description+" has been deleted!!";
       this.todos.splice(this.todos.indexOf(id),1);
     }
   });
  }

  toDoUpdate(id){
     this.route.navigate(['/todos',id]);
  }

  addTodo(){
    this.route.navigate(['/todos',-1]);
  }

}
