import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { AuthorModel } from '../models/AuthorModel';
import { UserModel } from '../models/UserModel';
import { AddressModel } from '../models/AddressModel';
import { BookAuthorCustomModel } from '../models/BookAuthorCustomModel';
import { BorrowingBookCustomModel } from '../models/BorrowingBookCustomModel';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(
    private http: HttpClient
  ) { }
//ProjectLibraryMultiTiers
  getAllBooks() {
    return this.http.get<BookModel[]>("https://localhost:7143/api/Book");
 }

  getAllAuthors()
  {
    return this.http.get<AuthorModel[]>("https://localhost:7143/api/Author");
  }

  getAuthor(id:number)
  {
    return this.http.get<AuthorModel>("https://localhost:7143/api/Author/"+id); 
  }

  getProfile()
  {
    return this.http.get<UserModel>("https://localhost:7143/api/User/1");
  }

  getAddressById(id:number)
  {

    return this.http.get<AddressModel>("https://localhost:7143/api/Address/"+id); 
  }
  
  getBookAuthorCustom(id:number)
  {
    return this.http.get<BookAuthorCustomModel[]>("https://localhost:7143/api/BookAuthorCustom/"+id);
  }


  getBookByauthorId(id:number)
  {
    return this.http.get<BookModel[]>("https://localhost:7143/api/Book/GetBookByAuthorId/"+id);
  }

  getBorrowingBookByUserId(id:number)
  {
    return this.http.get<any[]>("https://localhost:7143/api/BorrowingBookCustom/"+id).pipe(map(data => data.map(d => new BorrowingBookCustomModel(d))));
     //return this.http.get<any[]>("https://localhost:7143/api/BorrowingBookCustom/"+id);//.pipe(map(data => data.map(d => new BorrowingBookCustomModel())));
  }
}
