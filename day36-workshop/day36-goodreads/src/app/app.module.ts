import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookService } from './services/book.service';
import { BooklistComponent } from './components/booklist.component';
import { BookDetailsComponent } from './components/book-details.component';

const appRoutes: Routes = [
  { path: '', component: BooklistComponent },
  { path: 'book/:bookId', component: BookDetailsComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, BooklistComponent, BookDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  providers: [BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
