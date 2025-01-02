// const cars = [
//     {
//       brand: 'Toyota',
//       model: 'Camry',
//       year: 2019,
//       color: 'Silver',
//       price: 25000,
//       amount: 3,
//       isSportCar: false,
//       type: 'Sedan',
//     },
//     {
//       brand: 'Honda',
//       model: 'Accord',
//       year: 2020,
//       color: 'White',
//       price: 28000,
//       amount: 5,
//       isSportCar: false,
//       type: 'Sedan',
//     },
//     {
//       brand: 'Ford',
//       model: 'Mustang',
//       year: 2021,
//       color: 'Red',
//       price: 50000,
//       amount: 2,
//       isSportCar: true,
//       type: 'Coupe',
//     },
//     {
//       brand: 'Chevrolet',
//       model: 'Camaro',
//       year: 2018,
//       color: 'Black',
//       price: 45000,
//       amount: 1,
//       isSportCar: true,
//       type: 'Coupe',
//     },
//     {
//       brand: 'BMW',
//       model: 'M5',
//       year: 2022,
//       color: 'Blue',
//       price: 70000,
//       amount: 2,
//       isSportCar: true,
//       type: 'Sedan',
//     },
//     {
//       brand: 'Mercedes-Benz',
//       model: 'E-Class',
//       year: 2020,
//       color: 'Silver',
//       price: 60000,
//       amount: 3,
//       isSportCar: false,
//       type: 'Sedan',
//     },
//     {
//       brand: 'Audi',
//       model: 'A4',
//       year: 2021,
//       color: 'Gray',
//       price: 45000,
//       amount: 0,
//       isSportCar: false,
//       type: 'Sedan',
//     },
//     {
//       brand: 'Lamborghini',
//       model: 'Huracan',
//       year: 2023,
//       color: 'Yellow',
//       price: 300000,
//       amount: 1,
//       isSportCar: true,
//       type: 'Coupe',
//     },
//     {
//       brand: 'Ferrari',
//       model: '488 GTB',
//       year: 2022,
//       color: 'Red',
//       price: 350000,
//       amount: 1,
//       isSportCar: true,
//       type: 'Coupe',
//     },
//     {
//       brand: 'Porsche',
//       model: '911',
//       year: 2021,
//       color: 'White',
//       price: 120000,
//       amount: 2,
//       isSportCar: true,
//       type: 'Coupe',
//     },
//     {
//       brand: 'Toyota',
//       model: 'Golf',
//       year: 2020,
//       color: 'Black',
//       price: 20000,
//       amount: 6,
//       isSportCar: false,
//       type: 'Hatchback',
//     },
//     {
//       brand: 'Subaru',
//       model: 'Forester',
//       year: 2021,
//       color: 'Green',
//       price: 30000,
//       amount: 3,
//       isSportCar: false,
//       type: 'SUV',
//     },
//     {
//       brand: 'Jeep',
//       model: 'Wrangler',
//       year: 2022,
//       color: 'Orange',
//       price: 35000,
//       amount: 0,
//       isSportCar: false,
//       type: 'SUV',
//     },
//     {
//       brand: 'Mazda',
//       model: 'CX-5',
//       year: 2020,
//       color: 'Red',
//       price: 28000,
//       amount: 5,
//       isSportCar: false,
//       type: 'SUV',
//     },
//     {
//       brand: 'Kia',
//       model: 'Soul',
//       year: 2021,
//       color: 'Yellow',
//       price: 20000,
//       amount: 4,
//       isSportCar: false,
//       type: 'Hatchback',
//     },
//     {
//       brand: 'Toyota',
//       model: 'Tucson',
//       year: 2022,
//       color: 'White',
//       price: 30000,
//       amount: 3,
//       isSportCar: false,
//       type: 'SUV',
//     },
//     {
//       brand: 'Nissan',
//       model: 'Sentra',
//       year: 2019,
//       color: 'Silver',
//       price: 22000,
//       amount: 3,
//       isSportCar: false,
//       type: 'Sedan',
//     },
//     {
//       brand: 'Volvo',
//       model: 'XC60',
//       year: 2020,
//       color: 'Blue',
//       price: 40000,
//       amount: 2,
//       isSportCar: false,
//       type: 'SUV',
//     },
//     {
//       brand: 'Lexus',
//       model: 'RX',
//       year: 2021,
//       color: 'Black',
//       price: 50000,
//       amount: 2,
//       isSportCar: false,
//       type: 'SUV',
//     },
//     {
//       brand: 'Land Rover',
//       model: 'Range Rover Evoque',
//       year: 2022,
//       color: 'Gray',
//       price: 60000,
//       amount: 0,
//       isSportCar: false,
//       type: 'SUV',
//     },
//   ];
  
//   Знайти авто заданого кольору
// console.log(cars.filter(car => car.color === "Yellow"));
// // // Знайти усі спорткари
// console.table(cars.filter(car => car.isSportCar === true));
// Знайти авто 2022 року
// console.table(cars.filter(car => car.year === 2022));
// Знайти авто певної марки
// console.table(cars.filter(car => car.brand === 'Land Rover'));
// Знайти авто дорожче заданої ціни
// console.table(cars.filter(car => car.price > 60000));
// // Знайти авто заданого типу
// console.table(cars.filter(car => car.type === 'SUV'));
// Порахувати кількість авто заданого року
// console.table(cars.filter(car => car.year === 2022).length);
// Відсортувати машини за роком випуску (від найстарішого до найновішого).
// console.table(cars.toSorted((a,b) => a.year - b.year));
// Знайти найдорожчу машину.
// const mostExpensiveCar = cars.reduce((prev, current) => {
//     return (prev.price > current.price) ? prev : current;
//   });  
//   console.table(mostExpensiveCar);
// // Знайти всі машини заданої марки (наприклад, Toyota).
// console.table(cars.filter(car => car.brand === 'Toyota'));
// // Порахувати загальну кількість машин.
// console.log(cars.length);
// Відсортувати машини за ціною (від найдешевшої до найдорожчої).
// console.table(cars.toSorted((a,b) => a.price - b.price));
// Знайти всі машини певного кольору та року випуску.
// const targetColor = ['Yellow', 'White'];
// const targetYear = [2022, 2020];
// const result = cars.filter(car => targetColor.includes(car.color) && targetYear.includes(car.year));
// console.log(result);
// Порахувати середню ціну всіх машин.
// const totalPrice = cars.reduce((total, car) => total + car.price, 0);
// const averagePrice = totalPrice / cars.length; 
//   console.table(averagePrice);
// // Порахувати сумарну кількість всіх машин заданої марки.
// const totalQuantity = cars.reduce((total, car) => car.brand === 'Toyota'? total + 1 : total, 0);
// console.log(totalQuantity);
// // Відсортувати машини за кількістю на складі (від найбільшої до найменшої).
// console.table(cars.toSorted((a,b) => b.amount - a.amount));
// Знайти всі машини, які не є спортивними та доступні для продажу.
// const availableAndNotSport = cars.filter(car => car.amount > 0 && car.isSportCar === false);
// console.table(availableAndNotSport);
// Порахувати загальну вартість всіх машин складі.
// const totalPrice = cars.reduce((total, car) => {
//    return car.amount > 0 ? total + (car.price*car.amount) : total;
// },0);
// console.log(totalPrice);
// Знайти всі машини певного типу та кольору.
// const targetColor = ['Yellow', 'White'];
// const targetType = ['Sedan', 'Coupe'];
// const result = cars.filter(car => targetColor.includes(car.color) && targetType.includes(car.type));
// console.table(result);
// Відсортувати машини за брендом та моделлю в алфавітному порядку.
// console.table(cars.toSorted((a,b) => {
//   const brandComp = a.brand.localeCompare(b.brand);
//   if(brandComp!==0){return brandComp;}else{return a.model.localeCompare(b.model);}
// }));
// Перевірити, чи є хоч одна машина певного кольору.
// const targetColor = ['Yellow', 'White'];
// console.log(cars.some(car => targetColor.includes(car.color)));
// // Перевірити, чи є всі авто є спроткарами.
// console.log(cars.every(car => car.isSportCar));
// // Перевірити, чи є всі новіші за вказаний рік.
// console.log(cars.every(car => car.year > 2000));
// // Створити новий масив, що містить лише назви моделей усіх машин.
// console.log(cars.map(car => car.model));
// Створити масив, що містить розмітку кожної машини.
// const carMarkupArray = cars.map(car => {
//     return `
//       <div class="car">
//         <h2>${car.brand} ${car.model}</h2>
//         <p>Year: ${car.year}</p>
//         <p>Price: $${car.price}</p>
//       </div>
//     `;
//   });
//   console.table(carMarkupArray);
// Знайти індекс першої машини з роком випуску 2022 року.
// const car = cars.find(car => car.year === 2022);
// if (car) {
//   console.log(cars.indexOf(car)); 
// } else {
//   console.log('No car with the year 2022 found.');
// }
// // Сортувати за ціною
// console.table(cars.toSorted((a,b) => a.price - b.price));
// Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.
// console.table(cars.filter(car => car.price > 50000).toSorted((a,b) => b.year - a.year));
// // Створити новий масив, що містить лише моделі доступних для продажу машин.
// console.table(cars.filter(car => car.amount > 0));
// Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.
// const car = cars.find(car => !car.isSportCar && car.amount > 0);
// if (car) {
//   console.log(car.color);
// } else {
//   console.log('No matching car found.');
// }
// Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.
// const neededCars = cars.filter(car => car.amount > 2 && car.price < 40000);
// const totalPrice = neededCars.reduce((total, car) => total + (car.price*car.amount), 0);
// console.log(totalPrice);
// // Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.
// console.log(cars.filter(car => car.type === 'SUV').toSorted((a,b) => a.year - b.year).map(car => car.model));
// // Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди та моделі цих машин.
// console.log(cars.filter(car => car.price > 60000 && car.isSportCar).toSorted((a,b) => b.price - a.price).map(car => ({ brand: car.brand, model: car.model })));
// Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин та ціну.
// const result = cars
// .filter(car => car.color === "Blue" && car.year >2020)
// .toSorted((a,b)=>a.price - b.price)
// .map(car => ({model: car.model, price: car.price}));
// console.table(result);
// Повернути масив, що містить лише кольори доступних для прродажу машин, та зробити щоб колір не повторювався дівчі.
// const availableColors = cars
//   .filter(car => car.amount > 0) 
//   .reduce((colors, car) => {
//     if (!colors.includes(car.color)) {
//       colors.push(car.color); 
//     }
//     return colors;
//   }, []); // Початкове значення для `reduce` - порожній масив
// console.log(availableColors);
// Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.
// let found = false; // Прапорець, щоб позначити, коли ми знайшли першу машину з ціною < 20000
// const result = cars
//   .filter(car => {
//     if (found) return true; // Якщо вже знайшли, залишаємо всі машини після
//     if (car.price < 20000) {
//       found = true; // Знайшли машину з ціною < 20000
//     }
//     return false; // Відкидаємо поточну машину, якщо вона до першої знайденої
//   })
//   .map(car => ({ brand: car.brand, model: car.model })); // Перетворюємо результат у потрібний формат
// console.log(result);
// Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.
// const foundCars = cars.filter(car => car.price>40000 && car.price<60000).toSorted((a,b) => b.year - a.year).map(car => ({model: car.model,}));
// console.table(foundCars);
// // Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.
// console.log(cars.some(car => car.amount>5 && car.price>70000));
// Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.
// const result = cars.filter(car => car.amount>0).toSorted((a,b) => b.amount - a.amount).map(car => ({brand: car.brand, model: car.model}));
// console.table(result);


  const users = [
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      age: 28,
      email: 'alice@gmail.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      age: 42,
      email: 'bob@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Eva',
      lastName: 'Williams',
      age: 35,
      email: 'eva@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'David',
      lastName: 'Brown',
      age: 22,
      email: 'david@gmail.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Sophia',
      lastName: 'Davis',
      age: 29,
      email: 'sophia@gmail.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Michael',
      lastName: 'Miller',
      age: 50,
      email: 'michael@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Olivia',
      lastName: 'Wilson',
      age: 19,
      email: 'olivia@gmail.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Daniel',
      lastName: 'Thompson',
      age: 31,
      email: 'daniel@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Ava',
      lastName: 'Harris',
      age: 27,
      email: 'ava@gmail.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'James',
      lastName: 'Jackson',
      age: 38,
      email: 'james@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Emma',
      lastName: 'Taylor',
      age: 23,
      email: 'emma@example.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'William',
      lastName: 'Anderson',
      age: 45,
      email: 'william@gmail.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Mia',
      lastName: 'Martin',
      age: 29,
      email: 'mia@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Joseph',
      lastName: 'Clark',
      age: 33,
      email: 'joseph@poshta.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Charlotte',
      lastName: 'Rodriguez',
      age: 26,
      email: 'charlotte@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'John',
      lastName: 'Lopez',
      age: 31,
      email: 'john@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Amelia',
      lastName: 'Lee',
      age: 20,
      email: 'amelia@example.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Benjamin',
      lastName: 'Gonzalez',
      age: 40,
      email: 'benjamin@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Chloe',
      lastName: 'Hernandez',
      age: 24,
      email: 'chloe@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Daniel',
      lastName: 'Young',
      age: 37,
      email: 'daniel@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Olivia',
      lastName: 'Miller',
      age: 38,
      email: 'olivia@example.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'James',
      lastName: 'Jones',
      age: 29,
      email: 'james@poshta.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Sophia',
      lastName: 'Davis',
      age: 31,
      email: 'sophia@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'William',
      lastName: 'Wilson',
      age: 52,
      email: 'william@poshta.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Ava',
      lastName: 'Taylor',
      age: 19,
      email: 'ava@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Michael',
      lastName: 'Clark',
      age: 40,
      email: 'michael@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Emma',
      lastName: 'Lee',
      age: 27,
      email: 'emma@poshta.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Daniel',
      lastName: 'Martinez',
      age: 35,
      email: 'daniel@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Isabella',
      lastName: 'Hernandez',
      age: 42,
      email: 'isabella@poshta.com',
      isActive: false,
      gender: 'Female',
    },
    {
      firstName: 'Liam',
      lastName: 'Garcia',
      age: 26,
      email: 'liam@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Mia',
      lastName: 'Rodriguez',
      age: 30,
      email: 'mia@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Noah',
      lastName: 'Lopez',
      age: 24,
      email: 'noah@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Charlotte',
      lastName: 'Perez',
      age: 29,
      email: 'charlotte@example.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Ethan',
      lastName: 'Turner',
      age: 37,
      email: 'ethan@example.com',
      isActive: true,
      gender: 'Male',
    },
    {
      firstName: 'Amelia',
      lastName: 'White',
      age: 23,
      email: 'amelia@poshta.com',
      isActive: true,
      gender: 'Female',
    },
    {
      firstName: 'Alexander',
      lastName: 'Jackson',
      age: 41,
      email: 'alexander@example.com',
      isActive: false,
      gender: 'Male',
    },
    {
      firstName: 'Sofia',
      lastName: 'Brown',
      age: 33,
      email: 'sofia@example.com',
      isActive: true,
      gender: 'Female',
    },
  ];

  // USERS

// Знайти користувачів віком від 25 до 40 років.
// console.table(users.filter(user => user.age>25 && user.age<40));
// // Знайти всіх користувачів із активним статусом.
// console.table(users.filter(user => user.isActive === true));
// Порахувати кількість користувачів молодше 30 років.
// console.log(users.reduce((total, user) => {
//     return total + (user.age < 30 ? 1 : 0);
//   }, 0));  
// // Відсортувати користувачів віком від старшого до молодшого.
// console.table(users.toSorted((a,b)=> b.age - a.age));
// Знайти користувачів з електронною поштою на домені gmail.com.
// const result = users.filter(user => user.email.includes('gmail.com'));
// console.table(result);
// Знайти всіх жінок серед користувачів.
// console.table(users.filter(user => user.gender === 'Female'));
// Порахувати кількість неактивних користувачів.
// console.log(users.reduce((total, user) => {
//         return total + (!user.isActive ? 1 : 0);
//       }, 0));  
// Відсортувати користувачів на прізвище в алфавітному порядку.
// console.table(users.toSorted((a,b) => a.lastName.localeCompare(b.lastName)));
// Знайти користувача з найбільшим віком.
// console.log(users.reduce((currentUser, maxUser) => currentUser.age < maxUser.age ? maxUser : currentUser ));
// Перевірити, чи є хоча б один користувач із прізвищем "Johnson".
// console.log(users.some(user => user.lastName === 'Johnson'));
// // Створити новий масив, який містить лише імена користувачів.
// console.log(users.map(user => user.firstName));
// // Створити масив з інформацією про користувачів у форматі JSON.
// const usersJSON = JSON.stringify(users, null, 2);
// console.table(usersJSON);
// Знайти індекс першого користувача під назвою "Jane".
// const userJane = users.filter(user => user.firstName === "Jane");
// const indexOfJane = users.indexOf(userJane);
// console.log(userJane);
// // Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.
// console.table(users.filter(user=> user.gender === 'Male' && user.age > 30 && user.age<50));
// Порахувати загальну кількість користувачів.
// console.log(users.reduce((total,user)=>total+1, 0));
// Знайти всіх користувачів з активним статусом та віком старше 25 років.
// console.table(users.filter(user=> user.isActive === true && user.age > 25));
// // Знайти користувачів із прізвищем, що починається на букву "S".
// console.table(users.filter(user => user.lastName.startsWith("S")));
// Відсортувати користувачів за віком (від молодшого до старшого).
// console.table(users.toSorted((a,b)=>a.age-b.age));
// Знайти всіх користувачів електронної пошти на домені yahoo.com.
// console.table(users.filter(user => user.email.includes('yahoo.com')));
// Знайти користувача з найменшим віком.
// const youngestUser = users.reduce((currentUser, youngestUser) => currentUser.age < youngestUser.age ? currentUser : youngestUser, 0);
// console.log(youngestUser);
// // Перевірити, чи є хоча б один користувач з ім'ям John.
// console.log(users.some(user=>user.firstName === "John"));
// // Створити новий масив, що містить лише прізвища користувачів.
// console.table(users.map(user => user.lastName));
// // Створити масив з інформацією про користувачів як рядкових описів.
// const res = users.map(user => `Name: ${user.firstName} ${user.lastName}, age: ${user.age}, gender: ${user.gender}, email: ${user.email}, isActive status: ${user.isActive}`);
// console.log(res);
// Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років. 
const userRes = users.filter(user => user.isActive === true && user.age >= 40)[0];
const indexOfUser = users.indexOf(userRes);
console.log(indexOfUser);