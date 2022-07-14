import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-ordered',
  templateUrl: './ordered.component.html',
  styleUrls: ['./ordered.component.css']
})
export class OrderedComponent implements OnInit {
  package: any;
  date = new Date();
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.package = this.cartService.getPackage();
    console.log(this.package);
  }

}
