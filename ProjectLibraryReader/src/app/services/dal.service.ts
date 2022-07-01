import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';
import { AuthorModel } from '../models/AuthorModel';
import { UserModel } from '../models/UserModel';

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

  getProfile()
  {
    return this.http.get<UserModel[]>("https://localhost:7143/api/User/1");
  }

}
