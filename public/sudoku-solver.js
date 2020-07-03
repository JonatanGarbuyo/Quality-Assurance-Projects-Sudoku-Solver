const textArea = document.getElementById("text-input");
const sudokuInput = document.getElementsByClassName("sudoku-input");
const solveButton = document.getElementById('solve-button');
const clearButton = document.getElementById('clear-button');
// import { puzzlesAndSolutions } from './puzzle-strings.js';

const fillGrid = values => {
  let valuesArray = values.split(""); // values is a String
  console.log("valuesArray: "); /////////////////////
  console.log(valuesArray); /////////////////////
  
  Array.from(sudokuInput).forEach((cell, i) => {
    if(valuesArray[i].match(/\d|\./)){ 
      cell.value = valuesArray[i].match(/\d/)? valuesArray[i] : "";
    } else { 
      return;
    }
  });
};

const fillAreaText = e => {
  let areaTextArray = textArea.value
  
  //console.log(e);
  e.data.match(/\d/)? "" : "";
  
  let index = Array.from(sudokuInput).findIndex((item) => item.id == e.target.id);
  console.log("index: " + index);
};








document.addEventListener("DOMContentLoaded", event => {
  // Load a simple puzzle into the text area
  textArea.value =
    "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  //console.log(textArea.value);////////////////////////
  fillGrid(textArea.value);
  
  
  // listen for changes in the textArea
  textArea.addEventListener('input', (e) => {
    e.data.match(/\d|\./)?
    fillGrid(e.target.value) : null;
  });
  // listen for inputs in sudokuGrid
  Array.from(sudokuInput).forEach(input => input.addEventListener('input', fillAreaText));
  
  
  
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