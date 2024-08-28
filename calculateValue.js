const testValue = ["book1", "book2", "book3", "book4", "book5"];
const price = 8;
const discounts = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};

const calculateValue = (booksArray) => {
  //1. If the books array is different from an array or is empty, return 0
  if (!Array.isArray(booksArray) || booksArray.length === 0) return "0.00";

  const booksCount = {};
  let total = 0;

  //2. Count the number of books and add them to a hash map
  booksArray.forEach(
    (book) => (booksCount[book] = (booksCount[book] || 0) + 1)
  );

  while (Object.keys(booksCount).length > 0) {
    //Find the number of unique books
    const uniqueBooksCount = Object.keys(booksCount).length;

    //Find the discount
    const discount = discounts[Math.min(uniqueBooksCount, 5)];

    //Calculate the total price
    total += price * uniqueBooksCount * (1 - discount);

    //Remove the books from the hash map
    Object.keys(booksCount).forEach((book) => {
      booksCount[book] -= 1;
      if (booksCount[book] === 0) {
        delete booksCount[book];
      }
    });
  }

  return total.toFixed(2);
};

console.log(calculateValue(testValue));

module.exports = calculateValue;
