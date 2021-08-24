const {
  verifyPassword,
  hasRightLenght,
  isNotNull,
  hasUpperCaseChar,
  hasLowerCaseChar,
  hasDigit,
  minimumConditionsReached,
} = require("./passwordverifier");

// is not NUll
test("isNotNull", () => {
  expect(isNotNull(null)).toBe(false);
});

test("isNotNull, happy_path", () => {
  expect(isNotNull("a")).toBe(true);
});

// right length
test("hasRightLenght", () => {
  expect(hasRightLenght("123456789")).toBe(false);
});

test("hasRightLenght, happy_path 1", () => {
  expect(hasRightLenght("12345678")).toBe(true);
});

test("hasRightLenght, happy_path 2", () => {
  expect(hasRightLenght("")).toBe(true);
});

test("hasRightLenght, null", () => {
  expect(hasRightLenght(null)).toBe(false);
});

// has UppercaseChar
test("hasUpperCaseChar", () => {
  expect(hasUpperCaseChar("a")).toBe(false);
});

test("hasUpperCaseChar, only digits", () => {
  expect(hasUpperCaseChar("123")).toBe(false);
});

test("hasUpperCaseChar, happy_path1", () => {
  expect(hasUpperCaseChar("A")).toBe(true);
});

test("hasUpperCaseChar, happy_path2", () => {
  expect(hasUpperCaseChar("Ab")).toBe(true);
});

// has LowercaseChar
test("hasLowerCaseChar", () => {
  expect(hasLowerCaseChar("A")).toBe(false);
});

test("hasLowerCaseChar, only digits", () => {
  expect(hasLowerCaseChar("123")).toBe(false);
});

test("hasLowerCaseChar, happy_path1", () => {
  expect(hasLowerCaseChar("a")).toBe(true);
});

test("hasLowerCaseChar, happy_path2", () => {
  expect(hasLowerCaseChar("Ab")).toBe(true);
});

// has Digit
test("hasDigit", () => {
  expect(hasDigit("a")).toBe(false);
});
test("hasDigit, Null", () => {
  expect(hasDigit(null)).toBe(false);
});

test("hasDigit happy_path1", () => {
  expect(hasDigit("13")).toBe(true);
});
test("hasDigit happy_path1", () => {
  expect(hasDigit("a3")).toBe(true);
});

// combine tests
// tenmiste 3 van bovenstaande condities true
// conditie 1.4 true

test("minimumConditionsReached", () => {
  const conditions = [false, false, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test("minimumConditionsReached under cutoff", () => {
  const conditions = [true, true, false, false, false];
  expect(minimumConditionsReached(conditions)).toBe(false);
});

test("minimumConditionsReached on cutoff", () => {
  const conditions = [true, true, true, false, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

test("minimumConditionsReached boven cutoff", () => {
  const conditions = [true, true, true, true, false];
  expect(minimumConditionsReached(conditions)).toBe(true);
});

// test for "outer" verivyPassword

test("verifyPassword null", () => {
  expect(verifyPassword(null)).toBe(false);
});

test("verifyPassword '1' ", () => {
  expect(verifyPassword("1")).toBe(false);
});

test("verifyPassword only digit' ", () => {
  expect(verifyPassword("1323")).toBe(false);
});

test("verifyPassword only Uppercase' ", () => {
  expect(verifyPassword("ABCD")).toBe(false);
});

test("verifyPassword only Lowercase' ", () => {
  expect(verifyPassword("abc")).toBe(true);
});

test("verifyPassword only Lowercase but to long' ", () => {
  expect(verifyPassword("abcdefghi")).toBe(false);
});

test("verifyPassword Lower and Upper ' ", () => {
  expect(verifyPassword("adBBe")).toBe(true);
});

test("verifyPassword correct password' ", () => {
  expect(verifyPassword("Ab1")).toBe(true);
});
