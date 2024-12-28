const cars = [
    {
      brand: 'Toyota',
      model: 'Camry',
      year: 2019,
      color: 'Silver',
      price: 25000,
      amount: 3,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Honda',
      model: 'Accord',
      year: 2020,
      color: 'White',
      price: 28000,
      amount: 5,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Ford',
      model: 'Mustang',
      year: 2021,
      color: 'Red',
      price: 50000,
      amount: 2,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Chevrolet',
      model: 'Camaro',
      year: 2018,
      color: 'Black',
      price: 45000,
      amount: 1,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'BMW',
      model: 'M5',
      year: 2022,
      color: 'Blue',
      price: 70000,
      amount: 2,
      isSportCar: true,
      type: 'Sedan',
    },
    {
      brand: 'Mercedes-Benz',
      model: 'E-Class',
      year: 2020,
      color: 'Silver',
      price: 60000,
      amount: 3,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Audi',
      model: 'A4',
      year: 2021,
      color: 'Gray',
      price: 45000,
      amount: 0,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Lamborghini',
      model: 'Huracan',
      year: 2023,
      color: 'Yellow',
      price: 300000,
      amount: 1,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Ferrari',
      model: '488 GTB',
      year: 2022,
      color: 'Red',
      price: 350000,
      amount: 1,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Porsche',
      model: '911',
      year: 2021,
      color: 'White',
      price: 120000,
      amount: 2,
      isSportCar: true,
      type: 'Coupe',
    },
    {
      brand: 'Toyota',
      model: 'Golf',
      year: 2020,
      color: 'Black',
      price: 20000,
      amount: 6,
      isSportCar: false,
      type: 'Hatchback',
    },
    {
      brand: 'Subaru',
      model: 'Forester',
      year: 2021,
      color: 'Green',
      price: 30000,
      amount: 3,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Jeep',
      model: 'Wrangler',
      year: 2022,
      color: 'Orange',
      price: 35000,
      amount: 0,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Mazda',
      model: 'CX-5',
      year: 2020,
      color: 'Red',
      price: 28000,
      amount: 5,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Kia',
      model: 'Soul',
      year: 2021,
      color: 'Yellow',
      price: 20000,
      amount: 4,
      isSportCar: false,
      type: 'Hatchback',
    },
    {
      brand: 'Toyota',
      model: 'Tucson',
      year: 2022,
      color: 'White',
      price: 30000,
      amount: 3,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Nissan',
      model: 'Sentra',
      year: 2019,
      color: 'Silver',
      price: 22000,
      amount: 3,
      isSportCar: false,
      type: 'Sedan',
    },
    {
      brand: 'Volvo',
      model: 'XC60',
      year: 2020,
      color: 'Blue',
      price: 40000,
      amount: 2,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Lexus',
      model: 'RX',
      year: 2021,
      color: 'Black',
      price: 50000,
      amount: 2,
      isSportCar: false,
      type: 'SUV',
    },
    {
      brand: 'Land Rover',
      model: 'Range Rover Evoque',
      year: 2022,
      color: 'Gray',
      price: 60000,
      amount: 0,
      isSportCar: false,
      type: 'SUV',
    },
  ];
  
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
  
  const users = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      address: {
        street: 'Victor Plains',
        suite: 'Suite 879',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
        geo: {
          lat: '-43.9509',
          lng: '-34.4618',
        },
      },
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      company: {
        name: 'Deckow-Crist',
        catchPhrase: 'Proactive didactic contingency',
        bs: 'synergize scalable supply-chains',
      },
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      address: {
        street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: {
          lat: '-68.6102',
          lng: '-47.0653',
        },
      },
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      company: {
        name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications',
      },
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
          lat: '29.4572',
          lng: '-164.2990',
        },
      },
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      company: {
        name: 'Robel-Corkery',
        catchPhrase: 'Multi-tiered zero tolerance productivity',
        bs: 'transition cutting-edge web services',
      },
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      address: {
        street: 'Skiles Walks',
        suite: 'Suite 351',
        city: 'Roscoeview',
        zipcode: '33263',
        geo: {
          lat: '-31.8129',
          lng: '62.5342',
        },
      },
      phone: '(254)954-1289',
      website: 'demarco.info',
      company: {
        name: 'Keebler LLC',
        catchPhrase: 'User-centric fault-tolerant solution',
        bs: 'revolutionize end-to-end systems',
      },
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      address: {
        street: 'Norberto Crossing',
        suite: 'Apt. 950',
        city: 'South Christy',
        zipcode: '23505-1337',
        geo: {
          lat: '-71.4197',
          lng: '71.7478',
        },
      },
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      company: {
        name: 'Considine-Lockman',
        catchPhrase: 'Synchronised bottom-line interface',
        bs: 'e-enable innovative applications',
      },
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      address: {
        street: 'Rex Trail',
        suite: 'Suite 280',
        city: 'Howemouth',
        zipcode: '58804-1099',
        geo: {
          lat: '24.8918',
          lng: '21.8984',
        },
      },
      phone: '210.067.6132',
      website: 'elvis.io',
      company: {
        name: 'Johns Group',
        catchPhrase: 'Configurable multimedia task-force',
        bs: 'generate enterprise e-tailers',
      },
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      address: {
        street: 'Ellsworth Summit',
        suite: 'Suite 729',
        city: 'Aliyaview',
        zipcode: '45169',
        geo: {
          lat: '-14.3990',
          lng: '-120.7677',
        },
      },
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      company: {
        name: 'Abernathy Group',
        catchPhrase: 'Implemented secondary concept',
        bs: 'e-enable extensible e-tailers',
      },
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      address: {
        street: 'Dayna Park',
        suite: 'Suite 449',
        city: 'Bartholomebury',
        zipcode: '76495-3109',
        geo: {
          lat: '24.6463',
          lng: '-168.8889',
        },
      },
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      company: {
        name: 'Yost and Sons',
        catchPhrase: 'Switchable contextually-based project',
        bs: 'aggregate real-time technologies',
      },
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      address: {
        street: 'Kattie Turnpike',
        suite: 'Suite 198',
        city: 'Lebsackbury',
        zipcode: '31428-2261',
        geo: {
          lat: '-38.2386',
          lng: '57.2232',
        },
      },
      phone: '024-648-3804',
      website: 'ambrose.net',
      company: {
        name: 'Hoeger LLC',
        catchPhrase: 'Centralized empowering task-force',
        bs: 'target end-to-end models',
      },
    },
  ];


//   Знайти авто заданого кольору

// Знайти усі спорткари

// Знайти авто 2022 року

// Знайти авто певної марки

// Знайти авто дорожче заданої ціни

// Знайти авто заданого типу

// Знайти усі спорткари

// Порахувати кількість авто заданого року

// Знайти всі машини з ціною вище вказаної.

// Відсортувати машини за роком випуску (від найстарішого до найновішого).

// Знайти найдорожчу машину.

// Знайти всі машини заданої марки (наприклад, Toyota).

// Порахувати загальну кількість машин.

// Відсортувати машини за ціною (від найдешевшої до найдорожчої).

// Знайти всі машини певного типу (наприклад, SUV).

// Знайти всі машини певного кольору та року випуску.

// Порахувати середню ціну всіх машин.

// Знайти всі машини, у яких кількість на складі більша за 0.

// Знайти всі машини з ціною менше 30000 та роком випуску після 2020 року.

// Порахувати сумарну кількість всіх машин заданої марки.

// Відсортувати машини за кількістю на складі (від найбільшої до найменшої).

// Знайти всі машини, які не є спортивними та доступні для продажу.

// Порахувати загальну вартість всіх машин складі.

// Знайти всі машини певного типу та кольору.

// Відсортувати машини за брендом та моделлю в алфавітному порядку.

// Перевірити, чи є хоч одна машина певного кольору.

// Перевірити, чи є хоч одна машина певного року.

// Перевірити, чи є всі авто є спроткарами.

// Перевірити, чи є всі новіші за вказаний рік.

// Створити новий масив, що містить лише назви моделей усіх машин.

// Створити масив, що містить розмітку кожної машини.

// Знайти індекс першої машини з роком випуску 2022 року.

// Сортувати за ціною

// Знайти всі машини з ціною вище 50000 і відсортувати їх за роком випуску від нових до старих.

// Створити новий масив, що містить лише моделі доступних для продажу машин.

// Знайти першу машину, яка не є спортивною та має кількість на на складі більше 0, потім повернути її колір.

// Порахувати загальну вартість всіх машин з кількістю на складі більше 2 і ціною менше 40 000.

// Знайти всі машини певного типу (наприклад, SUV), відсортувати їх за роком випуску від старих до нових і повернути масив тільки зі своїми моделями.

// Знайти всі спортивні машини з ціною вище 60000, відсортувати їх за спаданням ціни і повернути масив, що містить лише бренди та моделі цих машин.

// Знайти всі машини заданого кольору (наприклад, "Blue") та року випуску після 2020, відсортувати їх за зростанням ціни та повернути масив, що містить лише моделі цих машин та ціну.

// Повернути масив, що містить лише кольори доступних для прродажу машин, та зробити щоб колір не повторювався дівчі.

// Знайти індекс першої машини з ціною менше 20000 та повернути масив, що містить тільки бренди та моделі машин після знайденої.

// Знайти всі машини з ціною між 40000 та 60000, відсортувати їх за роком випуску від нових до старих і повернути масив, що містить тільки моделі цих машин.

// Перевірити, чи є хоч одна машина з кількістю на складі більше 5 і ціною вище 70 000.

// Знайти всі машини, у яких кількість на складі більша за 0, відсортувати їх по спаданню кількості та повернути масив, що містить тільки бренди та моделі цих машин.

// USERS
// Знайти користувачів віком від 25 до 40 років.

// Знайти всіх користувачів із активним статусом.

// Порахувати кількість користувачів молодше 30 років.

// Відсортувати користувачів віком від старшого до молодшого.

// Знайти користувачів з електронною поштою на домені gmail.com.

// Знайти всіх жінок серед користувачів.

// Порахувати кількість неактивних користувачів.

// Відсортувати користувачів на прізвище в алфавітному порядку.

// Знайти користувача з найбільшим віком.

// Перевірити, чи є хоча б один користувач із прізвищем "Johnson".

// Створити новий масив, який містить лише імена користувачів.

// Створити масив з інформацією про користувачів у форматі JSON.

// Знайти індекс першого користувача під назвою "Jane".

// Знайти всіх користувачів чоловічої статі віком від 30 до 50 років.

// Порахувати загальну кількість користувачів.

// Знайти всіх користувачів з активним статусом та віком старше 25 років.

// Знайти користувачів із прізвищем, що починається на букву "S".

// Відсортувати користувачів за віком (від молодшого до старшого).

// Знайти всіх користувачів електронної пошти на домені yahoo.com.

// Знайти користувача з найменшим віком.

// Перевірити, чи є хоча б один користувач з ім'ям John.

// Створити новий масив, що містить лише прізвища користувачів.

// Створити масив з інформацією про користувачів як рядкових описів.

// Знайти індекс користувача з активним статусом і віком більшим або рівним 40 років.