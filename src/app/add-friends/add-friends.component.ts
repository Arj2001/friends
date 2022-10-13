import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {

  constructor(private myApi: ApiServiceService) { }

  name = ""
  friendName = ""
  friendNickName = ""
  DescribeYourFriend = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "friendName":this.friendName,
      "friendNickName":this.friendNickName,
      "DescribeYourFriend":this.DescribeYourFriend,
    }
    console.log(data)
    this.myApi.addFriendsData(data).subscribe(
      ()=>{
        alert("Successfully added")
      }
      
    )
  }

  ngOnInit(): void {
  }

}
