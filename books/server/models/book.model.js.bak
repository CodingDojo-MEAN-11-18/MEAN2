const mongoose = require('mongoose');

const { Schema } = mongoose;

// export class Book {
//   title: string;
//   author: string | Author;
//   publisher: string;
//   year: number;
//   pages: number;
// }

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  publisher: String,
  year: {
    type: Number,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model('Book', BookSchema);
