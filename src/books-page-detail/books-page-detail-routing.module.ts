import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageDetailComponent } from './books-page-detail.component';

const routes: Routes = [
    {path:'',component:BooksPageDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksDetailPageRoutingModule { }