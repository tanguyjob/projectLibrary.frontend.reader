import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DalService } from '../services/dal.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookAuthorCustomModel } from '../models/BookAuthorCustomModel';
import { AuthentificationService } from '../services/authentification.service';
import { CartService } from '../services/cart.service';
// import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
books: BookAuthorCustomModel[]=[];
subscr!: Subscription;
isAuth!:boolean;
  
  constructor(
    private authSrv:AuthentificationService,
    private cartSrv:CartService,
    private dal: DalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  addToCart(content: any, b: BookAuthorCustomModel){
   
   
    
    if (this.cartSrv.addToCart(b))
    {
      //modal
     
    }
    this.router.navigate(['book']);
  }


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.subscr = this.dal.getBookAuthorCustom(+id).subscribe(
      (value)=>this.books=value
    );

    this.subscr = this.authSrv.getIsAuthObs().subscribe(
      (value)=> this.isAuth=value 
    );
  }


  ngOnDestroy(): void {
    this.subscr.unsubscribe();
  }

}
