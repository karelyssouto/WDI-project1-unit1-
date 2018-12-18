console.log('testing testing 1 2 3')

// ////////////////
//    CONNECT 4
// \\\\\\\\\\\\\\\

// step 1: declare variables for columns, the grid, the rows and the first player
let grid = [] //an empty array that will take in the values of the moves
let currentPlayer = 'player1' //player1 is going to be a present value for the game to start
let totalRows = 6
let totalCols = 7
let playerTurn = 0
// step 2: create a function to start the game 

let startGame = () => {
// grab all the elements with a class of column
    let columns = $('.column');
// loop through all the elements with a class of column
// on click, get the attribute data-x of every empty circle and svg element
//  with a class of column 
    for (let i = 0; i < columns.length; i++) {
        $(columns[i]).on('click', () => {
            emptyCell($(columns[i]).attr('data-x'));
        })
    }
// create a loop that will go through the number of rows and add them to
//  an array called grid so that 
    for (let rowNums = 0; i <= totalRows; i++) {
        grid[rowNums] = [];
//while looping through the number of rows, run a loop for every comlunm number as well     
//  evaluate the index of the rows and make it equal to notPlayed (meaning the chip space hasn't been filled)
        for (let colNums = 0; y <= cols; y++) {
            grid[rowNums][colNums] = 'notPlayed'
        }
    }
    let emptyCell = (rowNums) => {
        let nextColNotPlayed
        nextColNotPlayed = false

        for (let i = 0; i < totalRows; i++){
            if(grid[rowNums][i] === 'notPlayed'){
                i = nextColNotPlayed 
                break;
            }
        }
        // if current player is 1, switcth to player 2

        currentPlayer = grid[rowNums][nextColNotPlayed]

        $('#column-' + rowNums + '.row-' + nextColNotPlayed + 'circle').attr('class', currentPlayer)

        if(winner(parseInt(rowNums), nextColNotPlayed)){
        //////////////////////////////
        //     SOURCE: SWEET ALERT
        /////////////////////////////
            swal({
                text: currentPlayer + ' wins!',
            })
            clearBoard()
        }
////////////// SWICH PLAYERS //////////////
// if current player is 1, switcth to player 2

        if (currentPlayer === 'player1') {
            currentPlayer = 'player2'
        }
        else {
            currentPlayer = 'player1'
        }
    }

}
    startGame()