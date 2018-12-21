import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BookService } from '../../services';
import { Book } from '../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  book = new Book();

  sub: Subscription;

  @Output()
  createBook = new EventEmitter<Book>();

  constructor(
    private readonly bookService: BookService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', form.value);

    this.sub = this.bookService.createBook(this.book).subscribe(book => {
      this.book = new Book();
      form.reset();
      this.router.navigateByUrl('/');
    });

    // this.createBook.emit(this.book);
    // this.books.push(this.book);

    // console.log(this.books);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
