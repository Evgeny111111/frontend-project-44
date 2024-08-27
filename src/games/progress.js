import getStart from '../index.js';
import getRandomInt from '../utils.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const beginProgression = getRandomInt(0, 100);
  const lengthProgression = getRandomInt(5, 10);
  const stepProgression = getRandomInt(2, 5);

  const getProgression = () => {
    const result = [];
    for (let i = 0; i < lengthProgression; i += 1) {
      result.push(beginProgression + i * stepProgression);
    }
    return result;
  };

  const progression = getProgression();
  const missingIndex = 2;
  const correctAnswer = progression[missingIndex].toString();
  progression[missingIndex] = '..';

  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => getStart(description, generateRound);
