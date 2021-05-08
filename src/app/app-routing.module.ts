import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule)},
  {path:'books', loadChildren: () => import('../books-page/books-page.module').then(m => m.BooksPageModule)},
  {path:'contact', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)},
  {path:'about', loadChildren: () => import('../about-page/about-page.module').then(m => m.AboutPageModule)},
  {path:'booksdetail/:encoded', loadChildren: () => import('../books-page-detail/books-page-detail.module').then(m => m.BooksPageDetailModule)},
  {path:'booksdetail/:encoded/:primary_isbn10', loadChildren: () => import('../book-page-detail-list/book-page-detail-list.module').then(m => m.BookPageDetailListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
