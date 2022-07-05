import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { DalService } from '../services/dal.service';
import { AuthentificationService } from '../services/authentification.service';
import { Subscription } from 'rxjs';
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
    this.subscr = this.dal.getAddressById().subscribe(
      (a)=>{
        this.address=a;
      }
    );
  }

  OnDestroy() {
    this.subscr.unsubscribe();
    
}



}
