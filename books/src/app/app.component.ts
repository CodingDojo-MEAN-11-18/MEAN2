import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular';

  book = new Book();
  books: Book[] = [];

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submitting form', this.book);

    this.books.push(this.book);

    console.log(this.books);

    this.book = new Book();

    form.reset();
  }
}
