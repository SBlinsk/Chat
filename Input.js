class Input {
  constructor() {}
  init() {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "input");
    input.classList.add("input");
    return input;
  }
}
