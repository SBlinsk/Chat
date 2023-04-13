class ChatBot {
  constructor(arrOfAnswers) {
    this.answers = arrOfAnswers;
  }

  getRandomAnswerWithDelay() {
    return new Promise((resolve) => {
      const randomIndex = Math.floor(Math.random() * this.answers.length);
      const randomDelay = Math.floor(Math.random() * 3000);

      setTimeout(() => resolve("Бot: " + this.answers[randomIndex]), randomDelay);
    });
  }

  answerOn() {
    return this.getRandomAnswerWithDelay();
  }
}
