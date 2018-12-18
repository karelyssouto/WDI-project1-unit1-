console.log('testing testing 1 2 3')

// ////////////////
//    CONNECT 4
// \\\\\\\\\\\\\\\

// step 1: declare variables for columns, the grid, the rows and the first player
// let grid = [] //an empty array that will take in the values of the moves
// let currentPlayer = 'player1' //player1 is going to be a present value for the game to start
// let cols = 7 
// let rows = 6
// let numTurns = 0
let grid = [];
let currentPlayer = 'player1';
let totalRows = 6;
let totalCols = 7;
let numTurns = 0;

// step 2: create a function to start the game 

let startGame = () => {
// grab all the elements with a class of column
    columns = $('.column');
// loop through all the elements with a class of column
// on click, get the attribute data-x of every empty circle and svg element
//  with a class of column 
    for (let i = 0; i < columns.length; i++) {
        $(columns[i]).on('click', () => {
            emptyCell($(columns[i]).attr('data-x'));
        });
    }
// 
    for (let i = 0; i <= rows; x++) {
// 
        grid[x] = [];
// 
        for (let y = 0; y <= cols; y++) {
            grid[x][y] = 'free';
        }
    }

}
    startGame()