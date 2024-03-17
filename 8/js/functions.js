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

const checkTimeTable = (dayStart, dayFinish, meetStart, meetDuration) => {
  const parseTime = (timeStr) => {
    timeStr = timeStr.split(':');
    return parseInt(timeStr[0], 10) * 60 + parseInt(timeStr[1], 10);
  };
  dayStart = parseTime(dayStart);
  dayFinish = parseTime(dayFinish);
  meetStart = parseTime(meetStart);
  meetDuration = parseInt(meetDuration, 10);
  if (meetStart < dayStart || (meetStart + meetDuration) > dayFinish) {
    return false;
  }
  return true;
};

checkTimeTable('08:00', '17:30', '14:00', 90); // true
checkTimeTable('08:00', '14:30', '14:00', 90); // false
checkTimeTable('8:0', '10:0', '8:0', 120); // true
