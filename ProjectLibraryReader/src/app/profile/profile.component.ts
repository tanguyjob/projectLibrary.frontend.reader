import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { DalService } from '../services/dal.service';
import { AuthentificationService } from '../services/authentification.service';
import { concatWith, Subscription } from 'rxjs';
import { AddressModel } from '../models/AddressModel';
import { BorrowingBookCustomModel } from '../models/BorrowingBookCustomModel';
import { add,format, formatDistance, formatRelative, subDays } from 'date-fns'
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
  borrowingBook: BorrowingBookCustomModel[]=[];
  constructor(
    private authService: AuthentificationService,
    private router:Router,
    private dal: DalService
  ) 
  {
    
   }

  onLogout() {
    this.authService.signOut();
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
     
    this.user=this.authService.getUser();
    if(this.user!= null)
    {
      
      this.subscr = this.authService.getProfile(this.user.id).subscribe(
        (u)=> {
          this.user=u;
          
          
        }
      );
      this.subscr = this.dal.getAddressById(this.user!.fK_User_Address).subscribe(
        (a)=>{
          this.address=a;
        }
      );
    
     this.subscr = this.dal.getBorrowingBookByUserId(this.user.id).subscribe(
      (b)=>
      {
        this.setPlannedDate(b);
      }
     );   
    }


  

  }

  OnDestroy() {
    this.subscr.unsubscribe();
    
  }

  private setPlannedDate(borrowing: BorrowingBookCustomModel[]) {
    console.log("je passe dans ma fonction setplanneddate");
    
   //borrowing.forEach(item=> console.log("dans ma boucle"));
  //  borrowing.forEach(item=> console.log(item.publicationDate));
    //borrowing.forEach(item=> console.log( add(item.dateBegin, { weeks:3 })));
   
   this.borrowingBook = borrowing;
   
   //   for(let b of borrowing)
   //  {
   //     console.log("je passe dans ma boucle")
   //  }
   }

}

