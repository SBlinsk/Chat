"use strict";
class Chat {
  constructor() {
    this.form = new Form().init();
    // this.input = new Input();
    // this.buttom = new Button();
    this.chatMessage = new ChatMessage();
  }
  on() {
    const chatWindow = document.querySelector("[data-atribute= 'chatWindow']");
    this.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      let value = event.target.input.value;
      const message = new ChatMessage("Я:"+value, chatWindow);
      message.init();
      event.target.input.value="";
      let answer = new ChatBot([
        "ПЕРВОЕ СООБЩЕНИЕ",
        "ВТОРОЕ СООБЩЕНИЕ",
        "ТРЕТЬЕ СООБЩЕНИЕ?",
      ]);

      answer.answerOn().then((answerText) => {
        const answerMessage = new ChatMessage(answerText, chatWindow);
        answerMessage.init();
      });
    });
  }
}

const chat = new Chat();
chat.on();


