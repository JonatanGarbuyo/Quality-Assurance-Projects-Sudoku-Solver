const gridInput = document.getElementsByClassName('sudoku-input');
const textArea = document.getElementById('text-input');
// import { puzzlesAndSolutions } from './puzzle-strings.js';

const fillGrid = (values) => {
  let valuesArray = values.split("");
  console.log(valuesArray);/////////////////////
  for(let i = 0; i < gridInput.length; i++){
    	console.log(gridInput[i]);/////////////////////////
  }
};




// listen for changes in the textArea

var xhr = new XMLHttpRequest();
xhr.open("GET", "/bar/foo.txt", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
  console.log("textArea.value");////////////////////////
  
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null); 

document.addEventListener('DOMContentLoaded', () => {
  // Load a simple puzzle into the text area
  textArea.value = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
  console.log(textArea.value);////////////////////////
  //fillGrid(textArea.value); 
  
});


/* 
  Export your functions for testing in Node.
  Note: The `try` block is to prevent errors on
  the client side
*/
try {
  module.exports = {
    
  }
} catch (e) {}
