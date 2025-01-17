/* eslint-disable no-unused-vars, no-prototype-builtins */
// Define the prototype object containing the shared methods
const bookPrototype = {
  getInfo: function () {
    return `${this.title} by ${this.author}`;
  },
  getPrice: function () {
    return this.price;
  },
  addRating: function (rating) {
    this.rating.push(rating);
  },
  getRating: function () {
    if (this.rating.length === 0) {
      return 0;
    }
    const totalStars = this.rating.reduce(
      (sum, stars) => sum + stars.length,
      0
    );
    return Math.round(totalStars / this.rating.length);
  },
};

// Factory function to create book instances
function createBook(id, title, author, price) {
  const book = Object.create(bookPrototype); // Create an object with methods in the prototype
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}
