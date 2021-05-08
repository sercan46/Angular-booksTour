import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksPageService } from 'src/books-page/books-page.service';

@Component({
  selector: 'app-book-page-detail-list',
  templateUrl: './book-page-detail-list.component.html',
  styleUrls: ['./book-page-detail-list.component.css']
})
export class BookPageDetailListComponent implements OnInit {

  constructor(private route:ActivatedRoute,private bookService:BooksPageService) { }
  routeParamsEncoded:any;
  routeParamsPrimary:any;

  listDetail:any;
  bookDetail:any;
  ngOnInit(): void {
    this.routeParamsPrimary = this.route.snapshot.paramMap.get('primary_isbn10');
    this.routeParamsEncoded = this.route.snapshot.paramMap.get('encoded');
    this.getBookData();
  }
  getBookData(){
    this.bookService.getDefaultBooks().subscribe(resp=>{
      this.listDetail = resp.results.lists.filter(x => x.list_name_encoded === this.routeParamsEncoded)[0];
      this.bookDetail=this.listDetail.books.filter(y=>y.primary_isbn10===this.routeParamsPrimary)[0];
    })
  }
  openToDetail(detail){
      window.open(detail,"_blank")
  }
} 
