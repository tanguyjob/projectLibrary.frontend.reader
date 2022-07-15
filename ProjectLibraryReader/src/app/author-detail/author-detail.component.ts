import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../models/AuthorModel';
import { BookModel } from '../models/BookModel';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DalService } from '../services/dal.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
author!: AuthorModel;
subscr!: Subscription;
books: BookModel[]=[];
  constructor(
    private route: ActivatedRoute,
    private dal: DalService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.subscr = this.dal.getAuthor(+id).subscribe(
      (value)=> this.author=value
    );
    this.subscr = this.dal.getBookByauthorId(+id).subscribe(
      (value)=> this.books=value
    );
  }

}
