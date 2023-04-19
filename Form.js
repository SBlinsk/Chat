class Form {
  constructor(parent) {
    this.parent = parent;
    this.container = document.createElement("div");
    this.chatWindow = document.createElement("div");
    this.formElement = document.createElement("form");
    this.input = new Input(this.formElement);
    this.button = new Button(this.formElement);

    this.container.classList.add("container");
    this.chatWindow.classList.add("chatWindow");
    this.chatWindow.dataset.atribute = "chatWindow";

    document.body.appendChild(this.container);
    this.container.appendChild(this.chatWindow);
    this.container.appendChild(this.formElement);
  }

  onSubmit(event) {
    event.preventDefault();
    let value = this.input.getValue();
    console.log(value);
    const message = new ChatMessage("Я:" + value, this.chatWindow);
    message.init();
    this.input.clear();
  }
  
  getFormElement() {
    return this.formElement;
  }
}
