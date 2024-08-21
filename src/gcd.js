import getStart from './index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const getRandomInt = () => Math.ceil(Math.random() * 10);
  const number1 = getRandomInt();
  const number2 = getRandomInt();
  const randomNumbers = [number1, number2];

  const getGreatestCommonDivisor = (num1, num2) => {
    while (num2 !== 0) {
      const temp = num2;
      num2 = num1 % num2;
      num1 = temp;
    }
    return num1;
  };

  const correctAnswer = String(getGreatestCommonDivisor(number1, number2));
  const question = randomNumbers.join(' ');
  return [question, correctAnswer];
};

export default () => getStart(gameDescription, generateRound);
