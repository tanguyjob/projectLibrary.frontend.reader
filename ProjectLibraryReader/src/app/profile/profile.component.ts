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
user?: UserModel;
address!: AddressModel;

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
    if(this.user!= null)
    {
      console.log("est ce que je passe dans mon if user == null");
      console.log(+this.user.id);
      
      this.subscr = this.authService.getProfile(1).subscribe(
        (u)=> {
          this.user=u;
        }
      );
    }
    // this.subscr = this.dal.getAddressById(+this.user!.fK_User_Address).subscribe(
    //   (a)=>{
    //     this.address=a;
    //   }
    // );
  }

  OnDestroy() {
    this.subscr.unsubscribe();
    
}



}
