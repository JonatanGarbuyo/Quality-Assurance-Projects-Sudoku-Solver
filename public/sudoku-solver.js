const textArea = document.getElementById("text-input");
const sudokuInput = document.getElementsByClassName("sudoku-input");
const solveButton = document.getElementById('solve-button');
const clearButton = document.getElementById('clear-button');
const errorMsg = document.getElementById('error-msg');
import { puzzlesAndSolutions } from './puzzle-strings.js';


const clearInputs = () => {
  textArea.value = "";
  Array.from(sudokuInput).forEach((cell, i) => {
    cell.value = "";
  })
}

const solvePuzzle = () => {
  if (textArea.value.length === 81){
    errorMsg.innerText = "";
  } else {
    errorMsg.innerText = "Error: Expected puzzle to be 81 characters long.";
    return;
  }
  //test every solution against text area string
  for (let i = 0; i < puzzlesAndSolutions.length; i++) {
    let solution = puzzlesAndSolutions[i][1];
    let correctSolution = Array.from(textArea.value).every((char, j) => {
      if (char.match(/[^1-9\.]/)) { return false;}
      if (char === ".") { return true;}
      return char === solution[j];
    });
    if (correctSolution) { 
      console.log(solution);/////////////////
      fillGrid(solution);
      break;
    }
  };
}


const fillGrid = values => {
  let valuesArray = values.split(""); // values is a String
  console.log("valuesArray: "); /////////////////////
  console.log(valuesArray); /////////////////////
  Array.from(sudokuInput).forEach((cell, i) => {
    if(valuesArray[i].match(/[1-9]|\./)){ 
      cell.value = valuesArray[i].match(/[1-9]/)? valuesArray[i] : "";
    } else { return; }
  });
};


const fillAreaText = e => {
  console.log(e);
  if(e.target.value.match(/[^1-9]/)){
    return;
  } else {
    
    let areaTextArray = textArea.value.split("");
    let index = Array.from(sudokuInput).findIndex((item) => item.id == e.target.id);
    console.log("index: " + index);/////////////////
    areaTextArray.splice(index, 1, !e.target.value? "." : e.target.value);
    textArea.value = areaTextArray.join("");}
};



document.addEventListener("DOMContentLoaded", event => {
  // Load a simple puzzle into the text area
  textArea.value =
    "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  fillGrid(textArea.value);
  
  // listen for changes in the textArea
  textArea.addEventListener('input', (e) => {
    console.log(e);
    e.target.value.match(/[^\d|\.]/)?
    null: fillGrid(e.target.value) ;
  });
  // listen for inputs in sudokuGrid
  Array.from(sudokuInput).forEach(input => input.addEventListener('input', fillAreaText));
  // on click solve the puzzle 
  solveButton.addEventListener('click', solvePuzzle);
  // clear the inputs 
  clearButton.addEventListener('click', clearInputs);
});

/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {
    fillAreaText,
    fillGrid,
    solvePuzzle,
    clearInputs
  };
} catch (e) {}