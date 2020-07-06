const textArea = document.getElementById("text-input");
const sudokuInput = document.getElementsByClassName("sudoku-input");
const solveButton = document.getElementById('solve-button');
const clearButton = document.getElementById('clear-button');
const errorMsg = document.getElementById('error-msg');
import { puzzlesAndSolutions } from './puzzle-strings.js';

const validInput = (input) => {
  // only numbers 1-9 an "." are valid inpurts
  if (input.toString().match(/[1-9\.]/) && input.length === 1){
      return true;
  }
  return false;
}

const clearInputs = () => {
  textArea.value = "";
  Array.from(sudokuInput).forEach((cell, i) => {
    cell.value = "";
  })
} 

const solvePuzzle = (str) => {
  if (str.length === 81){
    errorMsg.innerText = "";
  } else {
    errorMsg.innerText = "Error: Expected puzzle to be 81 characters long.";
    return;
  }
  //test every solution against text area string
  for (let i = 0; i < puzzlesAndSolutions.length; i++) {
    let solution = puzzlesAndSolutions[i][1];
    let correctSolution = Array.from(str).every((char, j) => {
      if (!validInput(char)) { return false;}
      if (char === ".") { return true;}
      return char === solution[j];
    });
    if (correctSolution) { 
      console.log(solution);/////////////////
      textArea.value = solution;
      fillGrid(solution);
      return true;
    }
  };
  return false;
}


const fillGrid = values => {
  let valuesArray = values.split(""); // values is a String
  console.log("valuesArray: "); /////////////////////
  console.log(valuesArray); /////////////////////
  Array.from(sudokuInput).forEach((cell, i) => {
    if(validInput(valuesArray[i])){ 
      cell.value = valuesArray[i] === "."? "" : valuesArray[i];
    } else { return; }
  });
};


const fillAreaText = e => {
  console.log(e);/////////////////////
  if(validInput(e.target.value)){
    let areaTextArray = textArea.value.split("");
    let index = Array.from(sudokuInput).findIndex((item) => item.id == e.target.id);
    console.log("index: " + index);/////////////////
    areaTextArray.splice(index, 1, !e.target.value? "." : e.target.value);
    textArea.value = areaTextArray.join("");
  } else { return; }
};



document.addEventListener("DOMContentLoaded", event => {
  // Load a simple puzzle into the text area
  textArea.value =
    "..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..";
  fillGrid(textArea.value);
  
  // listen for changes in the textArea
  textArea.addEventListener('input', (e) => {
    console.log(e);/////////////////////
    validInput(e.target.value)? fillGrid(e.target.value) : null ;
  });
  // listen for inputs in sudokuGrid
  Array.from(sudokuInput).forEach(input => input.addEventListener('input', fillAreaText));
  // on click solve the puzzle 
  solveButton.addEventListener('click', () => solvePuzzle(document.getElementById("text-input").value));
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
    clearInputs,
    validInput
  };
} catch (e) {}