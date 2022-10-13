import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getFriendsData=()=>{
    return this.http.get("http://dummyapifriends.herokuapp.com/view")
  }

  addFriendsData=(data:any)=>{
    return this.http.post("https://dummyapifriends.herokuapp.com/adddata",data)
  }
}
