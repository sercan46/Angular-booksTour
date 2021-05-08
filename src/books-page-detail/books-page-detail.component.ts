import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksPageService } from 'src/books-page/books-page.service';

@Component({
  selector: 'app-books-page-detail',
  templateUrl: './books-page-detail.component.html',
  styleUrls: ['./books-page-detail.component.css']
})
export class BooksPageDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private booksService: BooksPageService, private router: Router) {}
  detailData: any ;
  routeParams: string = "";
  ngOnInit(): void {
    this.routeParams = this.route.snapshot.paramMap.get('encoded');
    this.getBooks();
  }
  getBooks() {
    this.booksService.getDefaultBooks().subscribe(res => {
      this.detailData = res.results.lists.filter(x => x.list_name_encoded === this.routeParams)[0];
    })
  };
  openDetailBook(primary_isbn10: string) {
    this.router.navigate([`booksdetail/${this.detailData.list_name_encoded}/${primary_isbn10}`, { primary_isbn10: primary_isbn10,encoded:this.detailData.list_name_encoded }]);
  }
}
