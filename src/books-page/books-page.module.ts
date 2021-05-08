import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page.component';
import { BooksPageRoutingModule } from './books-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BooksPageComponent
  ],
  imports: [
    CommonModule,
    BooksPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksPageModule { }
