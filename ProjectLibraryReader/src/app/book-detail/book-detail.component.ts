import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DalService } from '../services/dal.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookAuthorCustomModel } from '../models/BookAuthorCustomModel';
import { AuthentificationService } from '../services/authentification.service';
import { CartService } from '../services/cart.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare var window: any;

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
books: BookAuthorCustomModel[]=[];
subscr!: Subscription;
isAuth!:boolean;
closeModal!: string;
closeResult = '';
  constructor(
    private modalService: NgbModal,
    private authSrv:AuthentificationService,
    private cartSrv:CartService,
    private dal: DalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  //modal:https://ng-bootstrap.github.io/#/components/modal/examples
  addToCart(content: any, b: BookAuthorCustomModel){ 
    if (this.cartSrv.addToCart(b))
    {
       //modal
       this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
     
    }
    this.router.navigate(['book']);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
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
