import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'
import { Cookie } from 'ng2-cookies/ng2-cookies'
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private url = 'https://chatapi.edwisor.com';
  private socket;

  constructor(public http:HttpClient) {
    // connection is being created or initialising the socket.
    // initial handshake
    this.socket = io(this.url);
   }

    // Events to be Listened
    // since this is the event which we have to listen to, we have to use observables here
    // in event based programming they expect something to happen & when that happen there is some data
    // then method is called. it will happen asynchronously.
    
  public verifyUser = () => {

    return Observable.create((observer) => {

      this.socket.on('verifyUser', (data) => {

        observer.next(data);
// whoever susbscribe to this observable will get this data.
      }); // end Socket

    }); // end Observable

  } // end verifyUser


  public onlineUserList = () => {

    return Observable.create((observer) => {

      this.socket.on("online-user-list", (userList) => {

        observer.next(userList);

      }); // end Socket

    }); // end Observable

  } // end onlineUserList


  public disconnectedSocket = () => {

    return Observable.create((observer) => {

      this.socket.on("disconnect", () => {

        observer.next();

      }); // end Socket

    }); // end Observable



  } // end disconnectSocket  
  // end events to be listened



  // events to be emitted
//component will call this method & it will pass the authorisation token of the user
// & this event will be emitted with the authtoken

  public setUser = (authToken) => {

    this.socket.emit("set-user", authToken);

  } // end setUser

  public markChatAsSeen = (userDetails) => {

    this.socket.emit('mark-chat-as-seen', userDetails);

  } // end markChatAsSeen

  // end events to be emitted

  // chat related methods 

  public getChat(senderId, receiverId, skip): Observable<any> {

    return this.http.get(`${this.url}/api/v1/chat/get/for/user?senderId=${senderId}&receiverId=${receiverId}&skip=${skip}&authToken=${Cookie.get('authtoken')}`)
      //.do(data => console.log('Data Received'))
      //.catch(this.handleError);

  } // end logout function

  public chatByUserId = (userId) => {

    return Observable.create((observer) => {

      this.socket.on(userId, (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } // end chatByUserId

  public SendChatMessage = (chatMsgObject) => {

    this.socket.emit('chat-msg', chatMsgObject);

  } // end getChatMessage


  public exitSocket = () => {

    this.socket.disconnect();

  }// end exit socket

  // Global error handler.

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    } // end condition *if
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }  // END handleError

}
