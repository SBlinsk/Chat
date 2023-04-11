class Input {
  constructor() {}
  init() {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("name", "input");

    input.style.width = "198px";
    return input;
  }
}

