// Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна обчислити суму чисел у масиві та передати результат у колбек.
const calcAmount = (numbers, callback) => {
    const sum = numbers.reduce((total, number)=> total + number, 0);
    callback(sum);
}
calcAmount([1, 2, 3, 4, 5], (result) => {
    console.log("Сума чисел у масиві:", result); 
});
// Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.
const doubleArray = (numbers, callback) => {
const doubled = numbers.map(number=>number*2);
callback(doubled);
}
// Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.
const filterWords = (words, condition, callback) => {
    const filteredWords = words.filter(word=>condition(word));
    callback(filteredWords);
}
// Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.
const capitalizeStrings = (strings, callback) => {
    const result = strings.map(word=>word[0].toUpperCase() + word.slice(1));
    callback(result);
}
const words = ["apple", "banana", "grape", "kiwi", "melon"];
capitalizeStrings(words, (capitalizedWords) => {
    console.log("Капіталізовані рядки:", capitalizedWords);
});
// Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.
const sortNumbers = (numbers, callback) => {
    const sorted = numbers.toSorted((x,y)=>x-y);
    callback(sorted);
}
const numbers = [5, 3, 8, 1, 2, 7];
sortNumbers(numbers, (sortedNumbers) => {
    console.log("Відсортований масив чисел:", sortedNumbers);
});
// Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.
const findMax = (numbers, callback) => {
    const max = Math.max(...numbers);
    const result = numbers.find(number=>number === max);
    callback(result);
}
findMax([5, 3, 8, 1, 2, 7], (maxNumber) => {
    console.log("Максимальне число в масиві:", maxNumber);
});
// Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.
const checkEven = (numbers, callback)=>{
const result = numbers.every(number=> number%2===0);
callback(result);
}
checkEven([60, 1, 8, 30], (isEven) => {
    console.log(isEven); 
});
// Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.
const concatStrings = (strings, separator, callback) => {
    const result = strings.join(separator);
    callback(result);
}
concatStrings(
    ["Hello", "world", "from", "JavaScript"],
    " ",
    (result) => {
      console.log(result);
    }
  );
// Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.
const parseNumbers = (strings, callback)=>{
    const result = strings.map(string => Number(string));
    callback(result);
}
parseNumbers(["five", "2", "3.5", "42"], (numbers) => {
    console.log(numbers);
  });
// Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.
const countCharacters = (strings, callback) => {
    const result = strings.reduce((total,str) => total + str.length, 0)
    callback(result);
}
countCharacters(["hello", "world", "JavaScript"], (totalCharacters) => {
    console.log("Загальна кількість символів:", totalCharacters);
  });

// Выполните рефакторинг кода используя метод forEach и стрелочные функции.
const calсulateAverage = (...args) => {
    let total = 0;
    args.forEach(arg => total+=arg);
    return total / args.length;
  }
  console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
  console.log(calсulateAverage(14, 8, 2)); // 8
  console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

  const printContactsInfo = ({ names, phones }) => {
    const nameList = names.split(",");
    const phoneList = phones.split(",");
    nameList.forEach((name, index) => console.log(`${name}: ${phoneList[index]}`))
  }
  
  printContactsInfo({
    names: "Jacob,William,Solomon,Artemis",
    phones: "89001234567,89001112233,890055566377,890055566300",
  });


Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.

Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      return onError(`Amount exceeds transaction limit of ${TRANSACTION_LIMIT}.`);
    } else if (amount > this.balance) {
      return onError("Insufficient funds.");
    } else {
      this.balance -= amount;
      return onSuccess(`Withdrawn ${amount}. Current balance: ${this.balance}.`);
    }
  },

  deposit(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT) {
      return onError(`Amount exceeds transaction limit of ${TRANSACTION_LIMIT}.`);
    } else if (amount <= 0) {
      return onError("Deposit amount must be greater than zero.");
    } else {
      this.balance += amount;
      return onSuccess(`Deposited ${amount}. Current balance: ${this.balance}.`);
    }
  },
};

function handleSuccess(message) {
  console.log(`✅ Success! ${message}`);
}
function handleError(message) {
  console.log(`❌ Error! ${message}`);
}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

// Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

const each = (array, callback) => {
    const result = [];
    array.forEach(element => result.push(callback(element)));
    return result;
}

console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value * 2;
    })
  );
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value - 10;
    })
  );
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return Math.sqrt(value);
    })
  );
  console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
      return Math.ceil(value);
    })
  );
  console.log(
    each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
      return Math.floor(value);
    })
  );
const each = (array, callback) => {
    const newArr = [];
    array.map(el => newArr.push(callback(el)));
    return newArr;
  }
  
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value * 2;
    })
  );
  console.log(
    each([64, 49, 36, 25, 16], function (value) {
      return value - 10;
    })
  );
  

  const logItems = (items) => {
    console.log(items);
    items.forEach((item, index) =>  console.log(`${index + 1} - ${item}`));
    }
  
  logItems(["Mango", "Poly", "Ajax"]);
  logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

  function printContactsInfo({ names, phones }) {
    const nameList = names.split(",");
    const phoneList = phones.split(",");
    nameList.forEach((name, index) =>  console.log(`${name}: ${phoneList[index]}`));
    }
  
  
  printContactsInfo({
    names: "Jacob,William,Solomon,Artemis",
    phones: "89001234567,89001112233,890055566377,890055566300",
  });

  const calсulateAverage = (...args) => {
    let total = 0;
    args.forEach(arg => total += arg);
    return total / args.length;
  }
  
  console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
  console.log(calсulateAverage(14, 8, 2)); // 8
  console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2