import getStart from '../index.js';

import getRandomInt from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomInt(0, 10);

  const isEven = () => number % 2 === 0;

  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;

  return [question, correctAnswer];
};
export default () => getStart(description, generateRound);
