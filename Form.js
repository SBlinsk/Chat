class Form {
    constructor() {
      this.input = new Input();
      this.button = new Button();
      //
    }
    init() {
      const container = document.createElement("div");
      const chatWindow = document.createElement("div");
      const form = document.createElement("form");
      container.classList.add("container");
  
      chatWindow.style.width = "250px";
      chatWindow.style.height = "250px";
      chatWindow.style.border = "1px solid black";
      chatWindow.dataset.atribute='chatWindow';

  
      document.body.appendChild(container);
      container.appendChild(chatWindow);
      container.appendChild(form);
      form.appendChild(this.input.init());
      form.appendChild(this.button.init());
      return container;
    }
  }
