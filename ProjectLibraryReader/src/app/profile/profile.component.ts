import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { DalService } from '../services/dal.service';
import { AuthentificationService } from '../services/authentification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
subscr!: Subscription;
user?: UserModel[]=[];;
  constructor(
    private authService: AuthentificationService,
    private router:Router
  ) { }

  onLogout() {
    this.authService.signOut();
 this.router.navigate(['login']);
  }

  ngOnInit(): void {
    if (this.user != null)
    {
      this.subscr = this.authService.getProfile().subscribe(
        (u)=> {
          this.user=u;
        }
      );
    }
  }

  OnDestroy() {
    this.subscr.unsubscribe();
}



}
