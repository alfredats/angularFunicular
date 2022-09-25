import { Component, OnInit } from '@angular/core';
import { BookSummary } from '../models';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books: BookSummary[] = [];

  constructor(private bookSvc: BookService) {}

  ngOnInit(): void {
    this.bookSvc
      .getBooks()
      .then((result) => {
        console.info('>>> books: ', result);
        this.books = result;
      })
      .catch((error) => {
        console.error('>>>> error: ', error);
      });
  }
}
