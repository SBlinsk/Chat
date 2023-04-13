class Button {
  constructor(parent) {
    this.parent = parent;
  }
  init() {
    const button = document.createElement("button");
    button.textContent = "Send";
    return this.parent.appendChild(button);
  }
}
