class ChatBot {

  answer() {

    const arrOfAnswers = [
      "ПЕРВОЕ СООБЩЕНИЕ",
      "ВТОРОЕ СООБЩЕНИЕ",
      "ТРЕТЬЕ СООБЩЕНИЕ?",
    ];

    function getRandomAnswerWithDelay(arrOfAnswers) {
      return new Promise((resolve) => {
        const randomIndex = Math.floor(Math.random() * arrOfAnswers.length);
        const randomDelay = Math.floor(Math.random() * 3000);

        setTimeout(
          () => resolve(arrOfAnswers[randomIndex]),
          randomDelay
        );
      });
    }
    return getRandomAnswerWithDelay(arrOfAnswers).then((answer)=> console.log(answer));
  }
}


