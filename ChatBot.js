class ChatBot {
  constructor(arrOfAnswers) {
    this.answers = arrOfAnswers;
  }

  async getRandomAnswerWithDelay() {
    const randomIndex = getRandomNumber(0, this.answers.length);
    const randomDelay = getRandomNumber(0, 3000);
    console.log(randomIndex);
    console.log(randomDelay);

    await wait(randomDelay);
    return "Бot: " + this.answers[randomIndex];
  }

  answerOn() {
    return this.getRandomAnswerWithDelay();
  }
}

function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
