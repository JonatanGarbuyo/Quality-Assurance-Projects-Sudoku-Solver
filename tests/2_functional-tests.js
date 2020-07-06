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
      const gridCells = Array.from(document.querySelectorAll('.sudoku-input')).map(cell => cell);
      const textArea = document.getElementById('text-input');
      gridCells[0].value = '5';
      gridCells[1].value = '4';
      gridCells[2].value = '3';
      const expected = '543';

      // Run function now that grid cells have changed
      Solver.setTextArea();

      assert.strictEqual(textArea.value, expected);
      done();
      // done();
    });
  });
  
  suite('Clear and solve buttons', () => {
    // Pressing the "Clear" button clears the sudoku 
    // grid and the text area
    test('Function clearInput()', done => {

      // done();
    });
    
    // Pressing the "Solve" button solves the puzzle and
    // fills in the grid with the solution
    test('Function showSolution(solve(input))', done => {

      // done();
    });
  });
});

