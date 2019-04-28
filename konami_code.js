const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

document.addEventListener("keydown", init());
document.addEventListener("click", greeting());

function greeting() {
  alert("Hello!");
}

let index = 0;

function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);

  let index = 0;

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
