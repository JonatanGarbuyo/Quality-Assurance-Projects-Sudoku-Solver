
const textArea = document.getElementById('text-input');
// import { puzzlesAndSolutions } from './puzzle-strings.js';

const fillGrid = (values) => {
  const gridInput = document.getElementsByClassName('sudoku-input');
  let valuesArray = values.split(""); // values is a String
  console.log("valuesArray: ");/////////////////////
  console.log(valuesArray);/////////////////////
  console.log("gridInput.length: " + gridInput.length);/////////////////////
  if(gridInput.length > 81) { return }
  for(let i = 0; i < gridInput.length; i++){
    	 gridInput[i].value = valuesArray[i].match(/\d/)?  valuesArray[i] : "";
  }
};




document.addEventListener('DOMContentLoaded', (event) => {
  // Load a simple puzzle into the text area
  textArea.value = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..a';
  //console.log(textArea.value);////////////////////////
  fillGrid(textArea.value); 
  
});

// listen for changes in the textArea
textArea.addEventListener("input", )
/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {
    
  }
} catch (e) {}
