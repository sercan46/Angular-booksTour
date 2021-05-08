import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksPageService {

  constructor(private httpService:HttpClient) { }
  url:string="https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=4FHEcIaZEPMneBXY0SAo4c4JDDm0gTvB"
  getDefaultBooks():Observable<any>{
       return this.httpService.get(this.url);
      }
}
