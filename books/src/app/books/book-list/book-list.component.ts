import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services';
import { Book } from '../../models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  selectedBook: Book;
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    console.log(this.bookService);

    // const self = this;

    // this.bookService.getBooks().subscribe(function(books) {
    //   console.log(self);
    //   self.books = books;
    // });
    this.bookService.getBooks().subscribe(books => {
      console.log(this);
      this.books = books;
    });
  }

  onSelect(book: Book): void {
    console.log('selecting book', book);

    this.selectedBook = this.selectedBook === book ? null : book;

    // if (this.selectedBook === book) {
    //   this.selectedBook = null;
    // } else {
    //   this.selectedBook = book;
    // }
  }

  onCreate(book: Book) {
    console.log('creating book', book);

    this.bookService.createBook(book).subscribe(newBook => {
      console.log('new book', newBook);
      // this.books.push(newBook);
      this.books = [...this.books, newBook];
    });
  }

  onDelete(bookId: number): void {
    console.log('deleting book');
    this.bookService.removeBook(bookId).subscribe(deletedBook => {
      console.log('deleted ', deletedBook);

      this.books = this.books.filter(book => book.id !== bookId);
    });
  }

  onClick(event: Event) {
    event.stopPropagation();
    console.log('clicking triggered');
  }
}
