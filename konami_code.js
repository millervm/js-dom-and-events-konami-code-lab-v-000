const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

document.addEventListener("keydown", init())

let index = 0;

function init() {
  // Write your JavaScript code inside the init() function
  const key = parseInt(this.detail || this.which);

  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Konami!");
      index = 0;
    }
    else {
      index = 0;
    }
  }
}
