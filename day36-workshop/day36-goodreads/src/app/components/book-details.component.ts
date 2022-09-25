import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetails } from '../models';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  private bookId!: string;

  book!: BookDetails;

  constructor(private ar: ActivatedRoute, private bSvc: BookService) {
    this.bookId = this.ar.snapshot.params['bookId'];
  }

  ngOnInit(): void {
    this.bSvc
      .getBookById(this.bookId)
      .then((result) => {
        console.log('>>> book details: ', result);
        this.book = result;
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
