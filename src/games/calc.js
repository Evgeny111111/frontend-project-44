import getStart from '../index.js';
import getRandomInt from '../utils.js';

const operators = ['-', '+', '*'];
const description = 'What is the result of the expression?';

const generateRound = () => {
  const getRandomOperator = () => getRandomInt(0, operators.length - 1);
  const index = getRandomOperator();
  const operator = operators[index];

  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);

  const answer = () => {
    switch (operator) {
      case '+':
        return number1 + number2;
      case '-':
        return number1 - number2;
      case '*':
        return number1 * number2;
      default:
        throw new Error(`Unknown operator: '${operator}!`);
    }
  };

  const correctAnswer = answer();
  const question = `${number1} ${operator} ${number2}`;

  return [question, correctAnswer];
};
export default () => getStart(description, generateRound);
