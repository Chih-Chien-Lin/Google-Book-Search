const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookId: { type: String},
  title: { type: String, required: true },
  authors: { type: Array },
  description:{ type: String },
  image: { type: String },
  link: { type: String},
  date: { type: Date, default: Date.now }
});

const test = 1;
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
