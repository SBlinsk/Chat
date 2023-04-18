class ChatBot {
  constructor(arrOfAnswers) {
    this.answers = arrOfAnswers;
  }

  getRandomAnswerWithDelay() {
    return new Promise((resolve) => {
      // const randomIndex = Math.floor(Math.random() * this.answers.length);
      // const randomDelay = Math.floor(Math.random() * 3000);
      const randomIndex = getRandomNumber(0, this.answers.length);
      const randomDelay = getRandomNumber(0, 3000);
      console.log(randomIndex);
      console.log(randomDelay);


      setTimeout(
        () => resolve("Бot: " + this.answers[randomIndex]),
        randomDelay
      );
    });
  }

  answerOn() {
    return this.getRandomAnswerWithDelay();
  }
}

function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

