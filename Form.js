class Form {
    constructor(parent) {
  this.parent =parent;
      //
    }
    init() {
      const container = document.createElement("div");
      const chatWindow = document.createElement("div");
      const form = document.createElement("form");
      container.classList.add("container");
      chatWindow.classList.add('chatWindow');
      chatWindow.dataset.atribute='chatWindow';

  
      document.body.appendChild(container);
      container.appendChild(chatWindow);
      container.appendChild(form);

      
    const input = new Input(form);
    input.init();
      // form.appendChild(this.input.init());
      const button = new Button(form);
      button.init();
      // form.appendChild(this.button.init());
      return container;
    }
  }
