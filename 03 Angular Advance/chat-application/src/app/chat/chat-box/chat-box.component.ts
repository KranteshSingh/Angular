import { Component, OnInit } from '@angular/core';

import { SocketService } from './../../socket.service';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies'


@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css'],
  // We have made socketService local to this component
  providers: [SocketService]
})
export class ChatBoxComponent implements OnInit {

  public authToken: any;
  public userInfo: any;
  public receiverId: any;
  public receiverName: any;
  public userList: any = [];
  public disconnectedSocket: boolean;

  constructor(
    public AppService: AppService,
    public SocketService: SocketService,
    public router: Router,
    private toastr: ToastrService) {

    this.receiverId = Cookie.get('receiverId');
    this.receiverName = Cookie.get('receiverName');
      // getting user information from cookies
  

  }

  ngOnInit() {


    this.authToken = Cookie.get('authtoken');
    this.userInfo = this.AppService.getUserInfoFromLocalstorage();

    this.checkStatus(); // this is to check whether the user is actually logged in or not. // apart from event based code method
    this.verifyUserConfirmation();
    this.getOnlineUserList();

  }

  // checking for the user whether he/she is authorised for visiting the page or not.
  public checkStatus: any = () => {

    if (Cookie.get('authtoken') === undefined || Cookie.get('authtoken') === '' || Cookie.get('authtoken') === null) {
      this.router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  } // end checkStatus


  // in this method we're calling the socketservice 
  public verifyUserConfirmation: any = () => {
    // calling the verifyUser method in socketservice
    // in this component we're waiting for the event to happen
    this.SocketService.verifyUser()
      .subscribe((data) => {

        this.disconnectedSocket = false;
        // socket is not disconnected anymore
        this.SocketService.setUser(this.authToken);
        this.getOnlineUserList()

      });
  }

  public getOnlineUserList: any = () => {

    this.SocketService.onlineUserList()
      .subscribe((userList) => {

        this.userList = [];

        for (let x in userList) {

          let temp = { 'userId': x, 'name': userList[x], 'unread': 0, 'chatting': false };

          this.userList.push(temp);

        }

        console.log(this.userList);

      }); // end online-user-list

  }
}
