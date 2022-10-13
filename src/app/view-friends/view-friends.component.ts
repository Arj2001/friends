import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-friends',
  templateUrl: './view-friends.component.html',
  styleUrls: ['./view-friends.component.css']
})
export class ViewFriendsComponent implements OnInit {

  constructor(private myApi:ApiServiceService) { 
    this.putFriendsData()
  }

  putFriendsData=()=>{
    this.myApi.getFriendsData().subscribe(
      (data)=>{
        this.friendsData = data
      }
    )
  }

  friendsData :any = {}

  ngOnInit(): void {
  }

}
