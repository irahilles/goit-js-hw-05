const books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      year: 1960,
      genre: 'Fiction',
      price: 10.99,
      rating: 4.9,
    },
    {
      title: '1984',
      author: 'George Orwell',
      year: 1949,
      genre: 'Dystopian',
      price: 8.99,
      rating: 4.8,
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      year: 1925,
      genre: 'Classic',
      price: 7.99,
      rating: 4.7,
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      year: 1951,
      genre: 'Fiction',
      price: 6.99,
      rating: 4.6,
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      year: 1813,
      genre: 'Romance',
      price: 5.99,
      rating: 4.9,
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      year: 1937,
      genre: 'Fantasy',
      price: 12.99,
      rating: 4.8,
    },
    {
      title: 'Moby Dick',
      author: 'Herman Melville',
      year: 1851,
      genre: 'Adventure',
      price: 9.99,
      rating: 4.5,
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      year: 1869,
      genre: 'Historical',
      price: 14.99,
      rating: 4.9,
    },
    {
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoevsky',
      year: 1866,
      genre: 'Philosophical',
      price: 11.99,
      rating: 4.8,
    },
    {
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoevsky',
      year: 1880,
      genre: 'Philosophical',
      price: 13.99,
      rating: 4.9,
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      year: 1932,
      genre: 'Dystopian',
      price: 9.99,
      rating: 4.7,
    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      year: 1847,
      genre: 'Romance',
      price: 7.99,
      rating: 4.8,
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
      year: 1847,
      genre: 'Romance',
      price: 8.99,
      rating: 4.7,
    },
    {
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      year: 1890,
      genre: 'Gothic',
      price: 6.99,
      rating: 4.6,
    },
    {
      title: 'Frankenstein',
      author: 'Mary Shelley',
      year: 1818,
      genre: 'Science Fiction',
      price: 7.99,
      rating: 4.7,
    },
    {
      title: 'Dracula',
      author: 'Bram Stoker',
      year: 1897,
      genre: 'Horror',
      price: 6.99,
      rating: 4.5,
    },
    {
      title: 'The Odyssey',
      author: 'Homer',
      year: -800,
      genre: 'Epic',
      price: 10.99,
      rating: 4.9,
    },
    {
      title: 'The Iliad',
      author: 'Homer',
      year: -750,
      genre: 'Epic',
      price: 9.99,
      rating: 4.8,
    },
    {
      title: 'Les Misérables',
      author: 'Victor Hugo',
      year: 1862,
      genre: 'Historical',
      price: 11.99,
      rating: 4.9,
    },
    {
      title: 'The Count of Monte Cristo',
      author: 'Alexandre Dumas',
      year: 1844,
      genre: 'Adventure',
      price: 12.99,
      rating: 4.9,
    },
    {
      title: 'The Grapes of Wrath',
      author: 'John Steinbeck',
      year: 1939,
      genre: 'Fiction',
      price: 8.99,
      rating: 4.7,
    },
    {
      title: 'Of Mice and Men',
      author: 'John Steinbeck',
      year: 1937,
      genre: 'Fiction',
      price: 7.99,
      rating: 4.6,
    },
    {
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      year: 1859,
      genre: 'Historical',
      price: 9.99,
      rating: 4.8,
    },
    {
      title: 'Great Expectations',
      author: 'Charles Dickens',
      year: 1861,
      genre: 'Fiction',
      price: 8.99,
      rating: 4.7,
    },
    {
      title: 'The Secret Garden',
      author: 'Frances Hodgson Burnett',
      year: 1911,
      genre: 'Children',
      price: 6.99,
      rating: 4.7,
    },
    {
      title: 'Little Women',
      author: 'Louisa May Alcott',
      year: 1868,
      genre: 'Fiction',
      price: 7.99,
      rating: 4.8,
    },
    {
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      year: 1877,
      genre: 'Romance',
      price: 10.99,
      rating: 4.9,
    },
    {
      title: 'The Adventures of Sherlock Holmes',
      author: 'Arthur Conan Doyle',
      year: 1892,
      genre: 'Mystery',
      price: 9.99,
      rating: 4.8,
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      year: 1954,
      genre: 'Fantasy',
      price: 20.99,
      rating: 4.9,
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: 'J.K. Rowling',
      year: 1997,
      genre: 'Fantasy',
      price: 10.99,
      rating: 4.8,
    },
  ];

//   Знайти всі книги жанру 'Fantasy'.
// console.log(books.filter(book => book.genre === 'Fantasy'));
// // Знайти всі книги, видані після 2000 року.
// console.log(books.filter(book => book.year > 2000));
// // Знайти всі книги, автором яких є 'Fyodor Dostoevsky'.
// console.log(books.filter(book => book.author === 'Fyodor Dostoevsky'));
// // Знайти всі книги з ціною меншою ніж 10 доларів.
// console.log(books.filter(book => book.price < 10));
// // Знайти всі книги з рейтингом 4.8 і вище.
// console.log(books.filter(book => book.rating > 4.8));
// // Знайти всі книги жанру 'Romance' та з ціною меншою ніж 8 доларів.
// console.table(books.filter(book => book.genre === 'Romance' && book.price < 8));
// // Знайти всі книги, видані до 1900 року.
// console.table(books.filter(book => book.year < 1900));
// Знайти всі книги, що містять слово 'and' у назві.
// console.table(books.filter(book => book.title.includes('and')));
// // Знайти всі книги, автором яких є 'J.R.R. Tolkien'.
// console.table(books.filter(book => book.author === 'J.R.R. Tolkien'));
// // Знайти всі книги жанру 'Historical' з рейтингом вище 4.7.
// console.table(books.filter(book => book.genre === 'Historical' && book.rating > 4.7));

// // Знайти першу книгу жанру 'Fantasy'.
// console.log(books.find(book => book.genre === 'Fantasy'));
// // Знайти першу книгу, видану після 2000 року.
// console.log(books.find(book => book.year > 2000));
// // Знайти першу книгу, автором якої є 'Fyodor Dostoevsky'.
// console.log(books.find(book => book.author === 'Fyodor Dostoevsky'));
// // Знайти першу книгу з ціною меншою ніж 10 доларів.
// console.log(books.find(book => book.price < 10));
// // Знайти першу книгу з рейтингом 4.8 і вище.
// console.log(books.find(book => book.rating > 4.8));
// // Знайти першу книгу жанру 'Romance' з ціною меншою ніж 8 доларів.
// console.table(books.find(book => book.genre === 'Romance' && book.price < 8));
// // Знайти першу книгу, видану до 1900 року.
// console.table(books.find(book => book.year < 1900));
// // Знайти першу книгу, що містить слово 'and' у назві.
// console.log(books.find(book => book.title.includes('and')));
// // Знайти першу книгу, автором якої є 'J.R.R. Tolkien'.
// console.log(books.find(book => book.author === 'J.R.R. Tolkien'));
// // Знайти першу книгу жанру 'Historical' з рейтингом вище 4.7.
// console.log(books.find(book => book.genre === 'Historical' && book.rating > 4.7));

// // Чи є в масиві хоча б одна книга жанру 'Fantasy'?
// console.log(books.some(book => book.genre === 'Fantasy'));
// // Чи всі книги в масиві мають рейтинг 4.5 і вище?
// console.log(books.every(book => book.rating >= 4.5));
// // Чи всі книги в масиві коштують менше 20 доларів?
// console.log(books.every(book => book.price < 20));
// // Чи всі книги в масиві видані після 1950 року?
// console.log(books.every(book => book.year > 1950));
// // Чи всі книги в масиві є жанру 'Fiction'?
// console.log(books.every(book => book.genre === 'Fiction'));
// // Чи всі книги в масиві мають автора з ім'ям, що починається на 'J'?
// console.log(books.every(book => book.author.startsWith('J')));
// // Чи всі книги в масиві є жанру 'Romance' з ціною меншою ніж 15 доларів?
// console.log(books.every(book => book.genre === 'Romance' && book.price < 15));
// // Чи всі книги в масиві видані до 2000 року?
// console.log(books.every(book => book.year < 2000));

// // Отримати масив назв всіх книжок.
// console.log(books.map(book => book.title));
// // Отримати масив авторів всіх книжок.
// console.log(books.map(book => book.author));
// Створити масив об'єктів, які містять лише назву та автора кожної книжки.
// const result = books.map(book => ({
// title: book.title,
// author: book.author,
// }))
// console.log(result);
// // Створити масив цін всіх книжок з подвоєною вартістю.
// // const updatedPrice = books.map(book=>book.price*2);
// // console.log(updatedPrice);
// // // Створити масив років видання всіх книжок з доданими 5 роками до кожного.
// // const updatedYear = books.map(book=>book.year + 5);
// // console.log(updatedYear);
// // Створити масив об'єктів, які містять назву книжки та її рейтинг у відсотках (помножений на 10).
// const changedRating = books.map(book => ({
//     title: book.title,
//     rating: `${book.rating*10} %`,
//     }))
//     console.log(changedRating);
// Створити масив об'єктів, де назва книжки буде в верхньому регістрі.
// const changeName = books.map(book => ({
//         title: book.title.toLocaleUpperCase(),
//         }))
//         console.log(changeName);
// // Створити масив рядків, що містять інформацію про кожну книжку в форматі "назва - автор".
// const infoAboutBook = books.map(book => {
//     return `Name of the book: ${book.title}, author: ${book.author}`;
// })
// console.table(infoAboutBook);
// // Створити масив об'єктів, де кожна книжка буде мати нове поле discountPrice, що дорівнює ціні зі знижкою 10%.
// const newField = books.map(book => ({
//     ...book,
//     discountPrice: book.price * 0.9,
// }));
// Створити масив об'єктів, що містять назву книжки та її ціну з доданим податком 15%.
// const changedPrice = books.map(book => ({
//     title: book.title,
//     priceWithTax: book.price * 1.15,
// }))
// console.table(changedPrice);
// Створити масив назв книжок, які видані після 2000 року.
// const issueYear = books
//     .filter(book => book.year > 2000)
//     .map(book => book.title);
//     console.table(issueYear);
// Створити масив об'єктів, де кожна книжка буде мати нове поле isClassic, що дорівнює true, якщо книжка видана до 1950 року.
// const newFildedWithCorectedYear = books.map(book => ({
//     ...book, 
//     isClassic: book.year < 1950, 
//   }));
  
//   console.table(newFildedWithCorectedYear);
// Отримати масив жанрів всіх книжок у верхньому регістрі.
// const newGenre = books.map(book => book.genre.toUpperCase());
// console.log(newGenre);
// // Створити масив назв книжок, де всі слова в назві починаються з великої літери.
// const newTitle = books.map(book =>{
//     const titleCase = book.title.split(' ')
//     .map(word => (word[0].toUpperCase()) + word.slice(1))
//     .join(' ');
//     return titleCase;
// }
// );
// console.log(newTitle);
// Створити масив об'єктів, що містять лише автора та рік видання кожної книжки.
// const onlyTwo = books.map(book => ({
//     author: book.author,
//     year: book.year,
// }));
// console.table(onlyTwo);
// Створити масив цін книжок, конвертованих з доларів у євро (курс 1 долар = 0.85 євро).
// const newPrice = books.map(book => {
//     const convertePrice = (book.price * 0.85).toFixed(2);
//     return {
//         convertePrice: parseFloat(convertePrice),
//     };
// }
// );
// console.table(newPrice);
// Створити масив назв книжок з доданим в кінці рядком "(Special Edition)".
// const newArrOfBooks = books.map(book => book.title + "(Special Edition)");
// console.log(newArrOfBooks);
// // Створити масив об'єктів, де кожна книжка буде мати нове поле shortTitle, що містить тільки перше слово з назви.
// const booksWithShortTitle = books.map(book => {
//     return {
//         ...book,
//         shortTitle: book.title.split(' ')[0],
//     };
// });
// console.table(booksWithShortTitle);
// Створити масив об'єктів, де кожна книжка буде мати нове поле description, що містить рядок "Ця книга від автора [author] була видана у [year] році".
// const booksWithNewString = books.map(book => {
//     return {
//         ...book,
//         description: `Ця книга від автора ${book.author} була видана у ${book.year} році`,
//     };
// });
// console.table(booksWithNewString);
// Створити масив об'єктів, що містять лише назву та жанр кожної книжки, де жанр записаний у нижньому регістрі.
// const newArr = books.map(book => {
//     return {
//         title: book.title,
//         genre: book.genre.toLowerCase(),
//     };
// })
// console.table(newArr);