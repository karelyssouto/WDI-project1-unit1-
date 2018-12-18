console.log('testing testing 1 2 3')

// /////////////////ALERTS///////////////////////
// how to play alerts
let howToPlay = $('.splashSubtitle1').on('click', ()=>{
    swal({
        text: 'Select the column you want your chip to be placed, click on it and let the second player take its turn. Keep  playing until someone wins!'
    })
})
// rules alerts 
let openRules = $('.splashSubtitle2').on('click', () => {
    swal({
        text: 'All you have to do is connect four of your colored checker pieces in a row, much the same as tic tac toe. This can be done horizontally, vertically or diagonally. Each player will drop in one checker piece at a time. This will give you a chance to either build your row, or stop your opponent from getting four in a row.'
    })
})
// wiining alerts
let winning = $('.splashSubtitle3').on('click', () => {
    swal({
        text: 'Get four in a row first' + '. It’s all about strategy' + '. Pick your favorite way to win (vertically, horizontally or diagonally).' + ' Release a disc to open up new options.',
    })
})
// /////////////////GAME ALERTS///////////////////////
let howToPlay2 = $('.splashSubtitle1-1').on('click', () => {
    swal({
        text: 'Select the column you want your chip to be placed, click on it and let the second player take its turn. Keep  playing until someone wins!'
    })
})
// rules alerts 
let openRules2 = $('.splashSubtitle2-1').on('click', () => {
    swal({
        text: 'All you have to do is connect four of your colored checker pieces in a row, much the same as tic tac toe. This can be done horizontally, vertically or diagonally. Each player will drop in one checker piece at a time. This will give you a chance to either build your row, or stop your opponent from getting four in a row.'
    })
})
// wiining alerts
let winning2 = $('.splashSubtitle3-1').on('click', () => {
    swal({
        text: 'Get four in a row first' + '. It’s all about strategy' + '. Pick your favorite way to win (vertically, horizontally or diagonally).' + ' Release a disc to open up new options.',
    })
})


// // ////////////////
// //   CONNECT 4  //
// // \\\\\\\\\\\\\\\

// // step 1: declare variables for columns, the grid, the rows and the first player
let grid = [] //an empty array that will take in the values of the moves
let currentPlayer = 'player1' //player1 is going to be a present value for the game to start
let totalRows = 7
let totalCols = 6

// step 2: create a function to start the game 

let startGame = () => {
    // // grab all the elements with a class of column
    let columns
    columns = $('.column')
    // loop through all the elements with a class of column
    // on click, get the attribute data-x of every empty circle and svg element
    //  with a class of column 
    for (let i = 0; i < columns.length; i++) {
        $(columns[i]).on('click', function () {
            emptyCell($(columns[i]).attr('data-x'))
        })
    }
    // create a loop that will go through the number of rows and add them to
    //  an array called grid so that it takes the row spaces 
    for (let rowSpace = 0; rowSpace <= totalRows; rowSpace++) {

        grid[rowSpace] = [];
        //while looping through the number of rows, run a loop for every comlunm number as well     
        //  evaluate the index of the rows and make it equal to notPlayed (meaning the chip space hasn't been filled)    
            for (let colSpace = 0; colSpace <= totalCols; colSpace++) {
            grid[rowSpace][colSpace] = 'notPlayed';
            }

        }
    }
// create a function to evaluate which space is empty and swicth players after a click
let emptyCell = (empty) => {

    let newChip

    newChip = false

    for (let i = 0; i < totalRows; i++) {
        if (grid[empty][i] === 'notPlayed') {
            newChip = i;
            break;
        }
    }

    grid[empty][newChip] = currentPlayer;

    $('#column-' + empty + ' .row-' + newChip + ' circle').attr(
        'class', currentPlayer
    );

    if (winner(parseInt(empty), newChip)) {
        //////////////////////////////
        //     SOURCE: SWEET ALERT
        /////////////////////////////
        swal({
            text: currentPlayer + ' wins!',
        })
        clearBoard()
    }

    // if current player is 1, switcth to player 2
    if (currentPlayer === 'player1') {
        currentPlayer = 'player2'
    }
    else {
        currentPlayer = 'player1'
    }
}

let clearBoard = () => {
    // grab all the circles
    let chips = $('circle')
    // to restart the game, loop through all the circles and add the attribute of notPlayed 
    // so that the chips go back to their original state
    for (let i = 0; i < chips.length; i++) {
        $(chips[i]).attr('class', 'notPlayed')
    }

    grid = [];
    for (let rowSpace = 0; rowSpace <= totalRows; rowSpace++) {

        grid[rowSpace] = [];
        for (let y = 0; y <= totalCols; y++) {
            grid[i][y] = 'notPlayed';
        }
        for (let colSpace = 0; colSpace <= totalCols; colSpace++) {
            grid[rowSpace][colSpace] = 'notPlayed';
        }

    
    }
}

        /////////////////////////////////////////////////////////
        // SOURCE: CODEPEN by asteig                           //
        // https://codepen.io/r00k/pen/pvRaGq?editors=1010     //
        ////////////////////////////////////////////////////////


let winner = function (currentX, currentY) {
// this will check the different directions for winning depending on the position in the x, y axis and checking for vertical, diagonal and horizontal 
    return checkDirection(currentX, currentY, 'vertical') || checkDirection(currentX, currentY, 'diagonal') || checkDirection(currentX, currentY, 'horizontal');
};

let isBounds = (row, column) => {
    return (grid.hasOwnProperty(row) && typeof grid[row][column] !== 'undefined');
};

let checkDirection = (currentRow, currentColumn, direction) => {

    let checkDirections = {
        horizontal: [[0, -1], [0, 1]],
        vertical: [[-1, 0], [1, 0]],
        diagonal: [[-1, -1], [1, 1], [-1, 1], [1, -1]]
    }

    let connect4Chips = 1;

    checkDirections[direction].forEach((coords) => {

        let chips = 1

        // for(let i=0; i < checkDirections; i++){
        //     checkDirections[direction] =(coords) =>{
        //         let i =1
        //          while (isBounds(currentX + (coords[0] * i), currentY + (coords[1] * i)) &&
        //         (grid[currentX + (coords[0] * i)][currentY + (coords[1] * i)] === currentPlayer)
        //     ) {
        //         chainLength = chainLength + 1
        //         i = i + 1
        //     }
        //     }
        // }
        while (isBounds(currentRow + (coords[0] * i), currentColumn + (coords[1] * i)) &&
            (grid[currentRow + (coords[0] * i)][currentColumn + (coords[1] * i)] === currentPlayer)
        ) {
            connect4Chips = connect4Chips + 1
            i = i + 1
        }

    })

    return (connect4Chips === 4)

}

startGame()
