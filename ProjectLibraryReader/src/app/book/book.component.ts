import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookModel } from '../models/BookModel';
import { DalService } from '../services/dal.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:BookModel[]=[];
  subscr!:Subscription;
  constructor(
    private dal: DalService
  ) { }

  ngOnInit(): void {
    this.subscr = this.dal.getAllBook().subscribe(     
      (value)=>this.books=value
    );
  }


  ngOnDestroy() {
    this.subscr.unsubscribe();
      }

}
