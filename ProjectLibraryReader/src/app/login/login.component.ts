import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
  user!: UserModel;
  userArray: UserModel[]=[];
  constructor(
    private authSrv: AuthentificationService,
              private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.isAuth = this.authSrv.isAuthentificate();

     this.subscr=this.authSrv.getAllUser().subscribe(
      (value)=> this.userArray=value);
  }

  onLogin(form:NgForm) {
 
      if (!form.invalid){
        let us = this.userArray.find(x=>x.email == form.value.email && x.password == form.value.password );
        if (us != null)
        {
          this.authSrv.signIn(us);
        }
       
      //   this.authSrv.signIn(form.value.login, form.value.password);
      //---------------------------------------  
       this.isAuth= this.authSrv.isAuthentificate();
      
         const ru = this.route.snapshot.params['ru'];
         if (ru != null){
           this.router.navigate([ru]);
         }
         else {
           this.router.navigate(['profile']);
         }
      }
    }
    onLogout() {
      this.authSrv.signOut();
      this.isAuth = this.authSrv.isAuthentificate();
    }
  
    ngOnDestroy() {
      this.subscr.unsubscribe();
    }
  
}
