"use strict";
class Chat {
  constructor() {
    this.form = new Form();
    this.chatMessage = new ChatMessage();
    this.chatWindow = this.form.chatWindow;
  }
  activateChat() {
    const formElement = this.form.getFormElement();
    formElement.addEventListener("submit", async (event) => {
      this.form.onSubmit(event);
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
