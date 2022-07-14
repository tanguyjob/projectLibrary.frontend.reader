import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../models/AuthorModel';
import { DalService } from '../services/dal.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors:AuthorModel[]=[];
  subscr!:Subscription;
  constructor(
    private dal: DalService
  ) { }

  ngOnInit(): void {
    this.subscr = this.dal.getAllAuthors().subscribe(     
      (value)=>this.authors=value
    );
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
      }

}
