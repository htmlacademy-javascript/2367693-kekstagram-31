const checksStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};

checksStringLength('функции это - не сложно', 23); //true
//checksStringLength('функции это - увлекательно', 23); //false

const isPalindrom = function (rawString) {
  const normalString = rawString.replaceAll(' ', '').toLowerCase();
  let emptyString = '';
  for (let i = normalString.length - 1; i >= 0; i--){
    emptyString += normalString.at(i);
  }
  return emptyString === normalString;
};

// Строка является палиндромом
isPalindrom('топот'); // true
// Несмотря на разный регистр и пробелы  тоже палиндром
//isPalindrom('тУт Как ТуТ'); // true
// Это не палиндром
//isPalindrom('самисусамис');  // false

const getInteger = function (rawString) {
  const notmalString = rawString.toString();
  let integer = '';
  for (let i = 0; i <= notmalString.length - 1; i++) {
    const value = parseInt(notmalString[i], 10);
    if (!Number.isNaN(value)) {
      integer += value.toString();
    }
  }
  return parseInt(integer, 10);
};

getInteger('2 плюс 2 равно 2');
//getInteger(5);
//getInteger('без цыфр будет NaN');
