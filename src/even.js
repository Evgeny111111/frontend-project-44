import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const countRound = 3;

  for (let i = 0; i < countRound; i += 1) {
    const getRandomInt = () => Math.floor(Math.random() * 10);
    const number = getRandomInt();

    const isEven = (num) => num % 2 === 0;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'\nLet's try again, ${userName}!`,
      );
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
