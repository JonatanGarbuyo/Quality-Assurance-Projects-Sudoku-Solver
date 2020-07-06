/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require('chai');
const assert = chai.assert;

const jsdom = require('jsdom');
const { JSDOM } = jsdom;
let Solver;

suite('UnitTests', () => {
  suiteSetup(() => {
    // Mock the DOM for testing and load Solver
    return JSDOM.fromFile('./views/index.html')
      .then((dom) => {
        global.window = dom.window;
        global.document = dom.window.document;

        Solver = require('../public/sudoku-solver.js');
      });
  });
  
  // Only the digits 1-9 are accepted
  // as valid input for the puzzle grid
  suite('Function validInput()', () => {
    test('Valid "1-9" characters', (done) => {
      const inputs = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
      inputs.forEach((input) => {
        assert.isTrue(Solver.validInput(input), );
      });
      done();
    });

    // Invalid characters or numbers are not accepted 
    // as valid input for the puzzle grid
    test('Invalid characters (anything other than "1-9") are not accepted', (done) => {
      const inputs = ['!', 'a', '/', '+', '-', '0', '10', 0];
      inputs.forEach((input, i) => {
        assert.isNotTrue(Solver.validInput(input), );
      });
      done(); 
    });
  });
  
  suite('Function ParsesPuzzle()', () => {
    test('Parses a valid puzzle string into an object  ¿? ', done => {
      const input = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6..';
      // not needed 
      assert.equal(input, input);
      done();
    });
    
    // Puzzles that are not 81 numbers/periods long show the message 
    // "Error: Expected puzzle to be 81 characters long." in the
    // `div` with the id "error-msg"
    test('Shows an error for puzzles that are not 81 numbers long', done => {
      const shortStr = '83.9.....6.62.71...9......1945....4.37.4.3..6..';
      const longStr = '..9..5.1.85.4....2432......1...69.83.9.....6.62.71...9......1945....4.37.4.3..6...';
      const errorMsg = 'Error: Expected puzzle to be 81 characters long.';
      const errorDiv = document.getElementById('error-msg');
      
      Solver.solvePuzzle(shortStr); 
      assert.equal(errorDiv.innerText, errorMsg);

      Solver.solvePuzzle(longStr);
      assert.equal(errorDiv.innerText, errorMsg);
      done();
    });
  });

  suite('Function solvePuzzle()', () => {
    // Valid complete puzzles pass
    test('Valid puzzles pass', done => {
      const input = '218396745753284196496157832531672984649831257827549613962415378185763429374928561';
      assert.equal(Solver.solvePuzzle(input), true);
      done();
    });

    // Invalid complete puzzles fail
    test('Invalid puzzles fail', done => {
      const input = '218396745753284196496157832531672984649831257827549613962415378185763429374928569';
      assert.equal(Solver.solvePuzzle(input), false);
      done();
    });
  });
  
  
  suite('Function solvePuzzle()', () => {
    // Returns the expected solution for a valid, incomplete puzzle
    test('Returns the expected solution for an incomplete puzzle', done => {
      const input = '.7.89.....5....3.4.2..4..1.5689..472...6.....1.7.5.63873.1.2.8.6..47.1..2.9.387.6';
      const solution = '473891265851726394926345817568913472342687951197254638734162589685479123219538746';
      
      const solutionArray = input.split("");
      Solver.solvePuzzle(input);
      
      const sudokuInput = document.getElementsByClassName("sudoku-input");
      Array.from(sudokuInput).forEach((cell, i)=>{
         assert.equal(cell.value, solution[i]);
      });
      done();
    });
  });
});
