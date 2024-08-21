import getStart from './index.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const getRandomInt = (min, max) => {
    // eslint-disable-next-line no-param-reassign
    min = Math.ceil(min);
    // eslint-disable-next-line no-param-reassign
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const beginProgression = getRandomInt(0, 100);
  const lengthProgression = getRandomInt(5, 10);
  const stepProgression = getRandomInt(2, 5);

  const getProgression = () => {
    const result = [];
    for (let i = 0; i <= lengthProgression; i += 1) {
      result.push(beginProgression + i * stepProgression);
    }
    return result;
  };

  let progression = getProgression();
  const missingSymbol = progression.splice(2, 1, '..').join('');
  const correctAnswer = missingSymbol;

  progression = progression.join(' ');
  const question = progression;
  return [question, correctAnswer];
};

export default () => getStart(description, generateRound);
