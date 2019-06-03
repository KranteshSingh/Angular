import { Injectable } from '@angular/core';
//Importing Observable for handling Observables response from http request.
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
// Imporing Cookie Module for storing temporary data in browser like user session details.
import { Cookie } from 'ng2-cookies/ng2-cookies';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "https://chatapi.edwisor.com";

  constructor(public http: HttpClient) { }

  // signupFunction for registration of the user.
  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobile', data.mobile)
      .set('email', data.email)
      .set('password', data.password)
      .set('apiKey', data.apiKey);

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  }// end of signupFunction function.

  // signinFunction for login of the user.
  public signinFunction(data): Observable<any> {
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);

    return this.http.post(`${this.url}/api/v1/users/login`, params);
  }// end of signinFunction function.


  // This is to get User Info after the user logged in the system. Mainly for authorisation purpose.
  // Content restriction.
  public getUserInfoFromLocalstorage = () => {
    return JSON.parse(localStorage.getItem('userInfo'));
  } // end getUserInfoFromLocalstorage

  // This is to set user Info in the local storage of the browser.
  public setUserInfoInLocalStorage = (data) => {
    localStorage.setItem('userInfo', JSON.stringify(data))
  }

  // This is to remove the session of a particular user.
  public logout(): Observable<any> {
    const params = new HttpParams()
      .set('authToken', Cookie.get('authtoken'))
    return this.http.post(`${this.url}/api/v1/users/logout`, params);
  } // end logout function


  // HandleError Function for Handling error. This is must in every SERVICE.
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
