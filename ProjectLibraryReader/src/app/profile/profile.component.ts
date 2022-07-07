import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { DalService } from '../services/dal.service';
import { AuthentificationService } from '../services/authentification.service';
import { concatWith, Subscription } from 'rxjs';
import { AddressModel } from '../models/AddressModel';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
subscr!: Subscription;
subscr2!: Subscription;
user?: UserModel;
address!: AddressModel;
addressId!: number;

  constructor(
    private authService: AuthentificationService,
    private router:Router,
    private dal: DalService
  ) { }

  onLogout() {
    this.authService.signOut();
 this.router.navigate(['login']);
  }

  ngOnInit(): void {
     
    this.user=this.authService.getUser();

    console.log("ngOninit de profile ts",this.user!.fK_User_Address);
    if(this.user!= null)
    {
      
      this.subscr = this.authService.getProfile(this.user.id).subscribe(
        (u)=> {
          this.user=u;
          
          
        }
      );
      console.log("avant l'appel de ma DAL",this.user!.fK_User_Address);
    this.subscr = this.dal.getAddressById(this.user!.fK_User_Address).subscribe(
      (a)=>{
        this.address=a;
      }
    );
    }
  }

  OnDestroy() {
    this.subscr.unsubscribe();
    
}



}
