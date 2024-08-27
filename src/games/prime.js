import getStart from '../index.js';
import getRandomInt from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const number = getRandomInt(0, 20);

  const isPrime = () => {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return number > 1;
  };

  const check = () => {
    const result = isPrime(number) ? 'yes' : 'no';

    return result;
  };

  const correctAnswer = check();
  const question = number;
  return [question, correctAnswer];
};

export default () => getStart(description, generateRound);
