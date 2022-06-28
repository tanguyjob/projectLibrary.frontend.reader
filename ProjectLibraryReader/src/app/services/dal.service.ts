import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookModel } from '../models/BookModel';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(
    private http: HttpClient
  ) { }
//ProjectLibraryMultiTiers
  getAllBook() {
    console.log("je rentrre dans mon service");
    return this.http.get<BookModel[]>("https://localhost:7143/api/Book");
 }


}
