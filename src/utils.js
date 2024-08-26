const getRandom = (min, max) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};
const getGreatestCommonDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
};

export { getRandom, getGreatestCommonDivisor };