const isNotNull = (string) => string !== null;

const hasRightLenght = (string) => isNotNull(string) && string.length <= 8;

const hasUpperCaseChar = (string) =>
  isNotNull(string) && string.toLowerCase() !== string;
// truc  als je lowercase naar lowercase veranderd blijft string gelijk
//       als je uppercase naar lowercase veranderd blijft string niet gelijk
//       dus als de srtring niet gelijk blijft weet je dat er een uppercase in zit

const hasLowerCaseChar = (string) =>
  isNotNull(string) && string.toUpperCase() !== string;

const hasDigit = (string) => /\d/.test(string);
// regular expresion

const minimumConditionsReached = (conditions) => {
  // conditions is aan array of booleans
  trueConditions = conditions.filter((bool) => bool === true);
  return trueConditions.length >= 3;
};

// "Outer" function
const verifyPassword = (password) => {
  const conditions = [
    isNotNull(password),
    hasRightLenght(password),
    hasUpperCaseChar(password), 
    hasLowerCaseChar(password),
    hasDigit(password)
  ];

  const result = minimumConditionsReached(conditions) && hasLowerCaseChar(password) // de && is omdat 1.4 moet true zijn
  return result;
};

module.exports = {
  verifyPassword,
  hasRightLenght,
  isNotNull,
  hasUpperCaseChar,
  hasLowerCaseChar,
  hasDigit,
  minimumConditionsReached,
};
