import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
items=this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(
  ): void {
  }

radioChangeHandler(event: any) {
  if (event.target.value==="domicile")
  {
    this.cartService.setPackage(false);
  } else {
    this.cartService.setPackage(true);
  }
}

commander() {
  this.router.navigate(['ordered']);
}

delete() {
  this.cartService.deleteCart();
  this.router.navigate(['catalog']);
}

}
