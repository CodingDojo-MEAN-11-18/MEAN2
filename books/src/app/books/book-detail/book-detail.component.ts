import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { Book } from '../../models';
import { BookService } from '../../services';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  @Input()
  book: Book;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly bookService: BookService
  ) {}

  ngOnInit() {
    // this.route.paramMap
    //   .subscribe(params => {
    //   console.log(params.get('id'));
    //   this.bookService.showBook(params.get('id')).subscribe(book => {
    //     console.log('book', book);
    //     this.book = book;
    //   });
    // });

    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => this.bookService.showBook(id))
      )
      .subscribe(book => {
        console.log('book', book);
        this.book = book;
      });
  }
}
