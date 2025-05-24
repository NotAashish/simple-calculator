// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    input += button.getAttribute("data-value");
    display.value = input;
  });
});

clearBtn.addEventListener("click", () => {
  input = "";
  display.value = "";
});

equalsBtn.addEventListener("click", () => {
  try {
    // Evaluate only if input is not empty
    if (input !== "") {
      let result = eval(input);  // Use eval safely for basic cases
      display.value = result;
      input = result.toString();
    }
  } catch (error) {
    display.value = "Error";
    input = "";
  }
});
