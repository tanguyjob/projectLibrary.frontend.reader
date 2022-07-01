import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from '../models/UserModel';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  subscr!: Subscription;
  isAuth?:boolean;
  user?: UserModel;
  constructor(
    private authSrv: AuthentificationService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.isAuth = this.authSrv.isAuthentificate();

     this.subscr=this.authSrv.getProfile().subscribe(
      (value)=> this.userArray=value
  }

}
