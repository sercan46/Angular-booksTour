import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageDetailComponent } from './books-page-detail.component';
import { BooksDetailPageRoutingModule } from './books-page-detail-routing.module';



@NgModule({
  declarations: [
    BooksPageDetailComponent
  ],
  imports: [
    CommonModule,
    BooksDetailPageRoutingModule
  ]
})
export class BooksPageDetailModule { }
