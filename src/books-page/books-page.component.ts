import { Component, OnInit } from '@angular/core';
import { BooksPageService } from './books-page.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  constructor(private bookService:BooksPageService,private router:Router) { }
  bestSellerDate:any=moment();
  publishDate:any=moment();
  previousPublishedDate:any=moment();
  listData:any[]=[];


  ngOnInit(): void {
    this.getBooksDefault();
  }
  getBooksDefault(){
    this.bookService.getDefaultBooks().subscribe({
      next:(resp)=>{
        this.bestSellerDate=moment(resp.results.bestsellers_date).format('DD.MM.YYYY');
        this.publishDate=moment(resp.results.published_date).format('DD.MM.YYYY');
        this.previousPublishedDate=moment(resp.results.previous_published_date).format('DD.MM.YYYY');
        this.listData=resp.results.lists

      },
      error:(err)=>{
        console.error(err)
      }
    })
  }
  goDetail(data){
    let detailData=this.listData.filter(x=>x.list_id===data);
    this.router.navigate([`booksdetail/${detailData[0].list_name_encoded}`,{encoded:detailData[0].list_name_encoded}]);

  }
}
