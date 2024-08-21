import getStart from './index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const getRandomInt = () => Math.ceil(Math.random() * 10);
  const number1 = getRandomInt();
  const number2 = getRandomInt();

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

  const correctAnswer = String(getGreatestCommonDivisor(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
