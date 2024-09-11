import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare const appUrl: String;
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldService(name:String){
    return (this.http.get(appUrl+'getAll/'+name));
  }

  deleteTodo(userid){
    console.log(userid);
    return (this.http.delete(appUrl+'deleteTodo/'+userid));
  }

  getATodo(id){
    return(this.http.get(appUrl+'getTodo/'+id));
  }

  updateATodo(id, objTodo){
    return(this.http.put(appUrl+'updateTodo/'+id, JSON.stringify(objTodo),{ headers: { 'Content-Type': 'application/json' } }));
  }
  
 createTodo(objTodo){
   return(this.http.post(appUrl+'createTodo', JSON.stringify(objTodo),{ headers: { 'Content-Type': 'application/json' } }));
  }
}
