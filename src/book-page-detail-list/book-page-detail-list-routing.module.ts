import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageDetailListComponent } from './book-page-detail-list.component';

const routes: Routes = [
    {path:'',component:BookPageDetailListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksPageDetailListRoutingModule { }