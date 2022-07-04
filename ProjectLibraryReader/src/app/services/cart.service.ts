import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {
items: BookModel[]= []; 
basketcounter$!:BehaviorSubject<number>;
//true signifie qu'il est à venir chercher en bibliothèque
package=true;
  constructor() { 
    this.basketcounter$ = new BehaviorSubject<number>(0);
  }

  setPackage(mybool: boolean) {
  this.package = mybool;
}

getPackage() {
  return this.package;
}

addToCart(book:BookModel) {
if (this.items.length !== 0)
{
  var isPresent = this.items.some(function(el){ return el.id === book.id});
  if (!isPresent)
  {
    this.items.push(book);
     this.basketcounter$.next(this.items.length);
     return true;
  }
  else
  {
    return false;
  }
}
else {
  this.items.push(book);
   this.basketcounter$.next(this.items.length);
   return true
  } 
}



deleteCart() {
  this.items = [];
  this.basketcounter$.next(this.items.length);
}

getItems() {
  return this.items;
}

}