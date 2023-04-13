class Input {
  constructor(parent) {
    this.parent = parent;
  }
  init() {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "input");
    input.classList.add("input");
    return this.parent.appendChild(input);
  }
}
