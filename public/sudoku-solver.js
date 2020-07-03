const textArea = document.getElementById("text-input");
const sudokuInput = document.getElementsByClassName("sudoku-input");
const solveButton = document.getElementById('solve-button');
const clearButton = document.getElementById('clear-button');
// import { puzzlesAndSolutions } from './puzzle-strings.js';

const fillGrid = values => {
  let valuesArray = values.split(""); // values is a String
  console.log("valuesArray: "); /////////////////////
  console.log(valuesArray); /////////////////////
  
  for (let i = 0; i < sudokuInput.length; i++) {
    if(valuesArray[i].match(/\d|\./)){ 
      sudokuInput[i].value = valuesArray[i].match(/\d/)? valuesArray[i] : "";
    } else { 
      continue;
    }
  }
  
};

document.addEventListener("DOMContentLoaded", event => {
  // Load a simple puzzle into the text area
  textArea.value =
    "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //console.log(textArea.value);////////////////////////
  fillGrid(textArea.value);
  
  
  // listen for changes in the textArea
  textArea.addEventListener('input', (e) => fillGrid(e.target.value));
  // listen for inputs in sudokuGrid
  Array.from(sudokuInput).forEach(input => input.addEventListener('input', setTextArea));
  
});

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {
    fillGrid
  };
} catch (e) {}