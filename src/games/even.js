import getStart from '../index.js';

const descriptionOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const getRandomInt = () => Math.floor(Math.random() * 10);
  const question = getRandomInt();

  const isEven = (num) => num % 2 === 0;
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => getStart(descriptionOfTheGame, generateRound);
