import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../models/user-model";
import {UserService} from "../../services/user.service";
import {FriendRequestModel} from "../../models/friend-request";

@Component({
  selector: 'left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss'
})
export class LeftSideFriendList implements OnInit {
  users:UserModel[]=[];
  constructor(private  userService: UserService) {
  }
  ngOnInit(): void {
    this.getPendingFriends();
  }
  showAllFriends(){}
  showPendingFriends(){}

  getPendingFriends() {
    debugger
    this.userService.getPendingFriends().subscribe(async result => {
      debugger
      this.users = result

    });
  }

  response(user :any, acceptOrReject:boolean){

    let friendRequestModel=new FriendRequestModel();
debugger
    friendRequestModel.status = acceptOrReject==true? 'Approved':'Rejected';
    friendRequestModel.userSourceId=user.id;
    this.userService.responseFriend(friendRequestModel).subscribe(async result => {

      if(result==true){

        user.isAdded = true
      }

    });
  }
}
