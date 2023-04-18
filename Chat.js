"use strict";
class Chat {
  constructor() {
    this.form = new Form().init();
    this.chatMessage = new ChatMessage();
    this.chatWindow = this.form.firstChild;
  }
  activateChat() {
    // const chatWindow = document.querySelector("[data-atribute= 'chatWindow']");
    // const chatWindow = this.chatWindow
    // console.log(chatWindow);


    this.form.addEventListener("submit", async (event) => {
      event.preventDefault();
      let value = event.target.input.value;
      const message = new ChatMessage("Я:"+value, this.chatWindow);
      message.init();
      event.target.input.value="";
      let answer = new ChatBot([
        "ПЕРВОЕ СООБЩЕНИЕ",
        "ВТОРОЕ СООБЩЕНИЕ",
        "ТРЕТЬЕ СООБЩЕНИЕ?",
      ]);

      answer.answerOn().then((answerText) => {
        const answerMessage = new ChatMessage(answerText, this.chatWindow);
        answerMessage.init();
      });
    });
  }
}

const chat = new Chat();
chat.activateChat();


