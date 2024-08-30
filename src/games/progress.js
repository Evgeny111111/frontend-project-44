import getStart from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const getProgression = (beginProgression, lengthProgression, stepProgression) => {
  const result = [];
  for (let i = 0; i <= lengthProgression; i += 1) {
    result.push(beginProgression + i * stepProgression);
  }
  return result;
};

const generateRound = () => {
  const beginProgression = getRandomInt(0, 100);
  const lengthProgression = getRandomInt(5, 10);
  const stepProgression = getRandomInt(2, 5);

  const progression = getProgression(beginProgression, lengthProgression, stepProgression);
  const correctAnswer = progression.splice(getRandomInt(0, progression.length - 1), 1, '..').join('');
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => getStart(description, generateRound);
