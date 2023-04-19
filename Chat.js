"use strict";
class Chat {
  constructor() {
    this.form = new Form();
    this.chatMessage = new ChatMessage();
    this.chatWindow = this.form.chatWindow;
    this.answer = new ChatBot([
      "ПЕРВОЕ СООБЩЕНИЕ",
      "ВТОРОЕ СООБЩЕНИЕ",
      "ТРЕТЬЕ СООБЩЕНИЕ?",
    ]);
  }
  activateChat() {
    const formElement = this.form.getFormElement();
    formElement.addEventListener("submit", async (event) => {
      this.form.onSubmit(event);
      const answerMessage = new ChatMessage(
        await this.answer.answerOn(),
        this.chatWindow
      );
      answerMessage.init();
    });
  }
}

const chat = new Chat();
chat.activateChat();
