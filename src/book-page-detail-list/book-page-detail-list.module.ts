import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageDetailListComponent } from './book-page-detail-list.component';
import { BooksPageDetailListRoutingModule } from './book-page-detail-list-routing.module';



@NgModule({
  declarations: [
    BookPageDetailListComponent
  ],
  imports: [
    CommonModule,
    BooksPageDetailListRoutingModule
  ]
})
export class BookPageDetailListModule { }
