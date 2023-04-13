"use strict";
class Chat {
  constructor() {
    this.form = new Form().init();
    // this.input = new Input();
    // this.buttom = new Button();
    this.chatMessage = new ChatMessage();
  }
  on() {
    const arrOfMessages = [];
    const arrOfAnswers = [
      "ПЕРВОЕ СООБЩЕНИЕ",
      "ВТОРОЕ СООБЩЕНИЕ",
      "ТРЕТЬЕ СООБЩЕНИЕ?",
    ];

    const chatWindow = document.querySelector("[data-atribute= 'chatWindow']");

    function elementRemoval() {
      while (chatWindow.firstChild) {
        chatWindow.firstChild.remove();
      }
    }
    function dialogDrawer() {
      for (let i = 0; i < arrOfMessages.length; i++) {
        const sendMessage = new ChatMessage(arrOfMessages[i], chatWindow);
        sendMessage.init();
      }
    }
    function getRandomElement(arr) {
      // Генерируем случайный индекс от 0 до длины массива
      const randomIndex = Math.floor(Math.random() * arr.length);
      // Возвращаем случайный элемент из массива
      return arr[randomIndex];
    }

    this.form.addEventListener("submit", async(event) => {
      event.preventDefault();
        elementRemoval();
        let value = event.target.input.value;
        arrOfMessages.push(`я:${value}`);
        event.target.input.value = "";
        elementRemoval();
        dialogDrawer();
        await wait(2000);
        elementRemoval();
        arrOfMessages.push(`бот:${getRandomElement(arrOfAnswers)}`);
        dialogDrawer();
    });
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const chat = new Chat();
chat.on();
