import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { AuthorModel } from '../models/AuthorModel';
import { UserModel } from '../models/UserModel';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
myUser?:UserModel;
private isAuth?:boolean;
isAuth$!: BehaviorSubject<boolean>;
  constructor(
    private http: HttpClient
  ) 
  {
    this.isAuth=false;
    this.isAuth$= new BehaviorSubject<boolean>(this.isAuth);
   }

   getIsAuthObs() {
    return this.isAuth$ as Observable<boolean>;
  }
  isAuthentificate() {
    return this.isAuth;
  }
  getUser(){
    return this.myUser;
  }
  signIn(user:UserModel ) {
    this.isAuth=true;
    this.isAuth$.next(this.isAuth);
    this.myUser=user;

  }

  signOut() {
    this.isAuth=false;
    this.isAuth$.next(this.isAuth);
  }

  getProfile(id:number)
  {
    return this.http.get<UserModel>("https://localhost:7143/api/User/"+id);
  }

  getAllUser()
  {
    return this.http.get<UserModel[]>("https://localhost:7143/api/User");
  }
}
