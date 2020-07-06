/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

const chai = require("chai");
const assert = chai.assert;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let Solver;

suite('Functional Tests', () => {
  suiteSetup(() => {
    // DOM already mocked -- load sudoku solver then run tests
    Solver = require('../public/sudoku-solver.js');
  });
  
  suite('Text area and sudoku grid update automatically', () => {
    // Entering a valid number in the text area populates 
    // the correct cell in the sudoku grid with that number
    test('Valid number in text area populates correct cell in grid', done => {
      const textArea = document.getElementById('text-input');
      textArea.value = '473891265851726394926345817568913472342687951197254638734162589685479123219538746';
      Solver.fillGrid(textArea.value);
      const sudokuInput = document.querySelectorAll('.sudoku-input');
      const gridArray = Array.from(sudokuInput).map(cell => cell.value).filter(str => str);
      const textAreaArray = textArea.value.split("");
      assert.deepStrictEqual(gridArray, textAreaArray);
      done();
    });

    // Entering a valid number in the grid automatically updates
    // the puzzle string in the text area
    test('Valid number in grid updates the puzzle string in the text area', done => {
      const sudokuInput = document.querySelectorAll('.sudoku-input');
      const gridArray = Array.from(sudokuInput).filter(cell => cell.value);
      const textArea = document.getElementById('text-input');
      Solver.clearInputs();
      gridArray[0].value = '1';
      gridArray[1].value = '2';
      gridArray[2].value = '3';
      const expected = '123';
      console.log(textArea.value);
      assert.equal(textArea.value, expected);
      done();
      // done();
    });
  });
  
  suite('Clear and solve buttons', () => {
    // Pressing the "Clear" button clears the sudoku 
    // grid and the text area
    test('Function clearInput()', done => {
      const textArea = document.getElementById('text-input');
      Solver.clearInputs();
      const sudokuInput = document.querySelectorAll('.sudoku-input');
      const gridArray = Array.from(sudokuInput).filter(cell => cell.value);
      assert.equal(textArea.value, '');
      assert.deepStrictEqual(gridArray, []);
      done();
    });
    
    // Pressing the "Solve" button solves the puzzle and
    // fills in the grid with the solution
    test('Function showSolution(solve(input))', done => {

      // done();
    });
  });
});

