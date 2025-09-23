const books = [
{
id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", yearPublished: 1960, price: 18.99, publisher: { name: "J.B. Lippincott & Co.", location: "Philadelphia" }
},
{
id: 2, title: "1984", author: "George Orwell", genre: "Dystopian", yearPublished: 1949, price: 15.99, publisher: { name: "Secker & Warburg", location: "London" }
},
{
id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic", yearPublished: 1925, price: 10.99, publisher: { name: "Charles Scribner's Sons", location: "New York" }
},
{
id: 4, title: "Moby Dick", author: "Herman Melville", genre: "Adventure", yearPublished: 1851, price: 12.99, publisher: { name: "Harper & Brothers", location: "New York" }
},
{
id: 5, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", yearPublished: 1813, price: 9.99, publisher: { name: "T. Egerton", location: "London" }
} ];

//1 print all names of book available

console.log("---------------1----------------");

books.forEach((book)=>console.log(book.title));

//2 print books details published in  New York

console.log("---------------2----------------");
const newYorkBooks=books.filter(book=>book.publisher.location==="New York")
console.log(newYorkBooks);


//3 print the name of book that published before 1900
console.log("---------------3----------------");

books.filter(book => book.yearPublished < 1900).forEach(book => console.log(book.title, book.yearPublished));

//4 print the detail of book 1984
console.log("---------------4----------------");

console.log(books.find(book => book.title === "1984"));

//5 what will the revenue generated when all the books are sold out
console.log("---------------5----------------");
const totalRevenue = books.reduce((sum, book) => sum + book.price, 0);
console.log(`${totalRevenue}` + totalRevenue.toFixed(2));
