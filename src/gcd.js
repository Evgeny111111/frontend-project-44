import getStart from './index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const getRandomInt = () => Math.ceil(Math.random() * 10);
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const randomNumbers = [number1, number2];

  const getGreatestCommonDivisor = (num1, num2) => {
    let remainder;
    if (num1 > num2) {
      while (num2 !== 0) {
        remainder = num2;
        num2 = num1 % num2;
        num1 = remainder;
      }
      return num1
    }
    if (num1 < num2) {
      return getGreatestCommonDivisor(num2, num1);
    }
    return remainder;
  };

  const correctAnswer = getGreatestCommonDivisor(number1, number2);
  const question = randomNumbers.join(' ');
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
