const cells = document.querySelectorAll(".cell"); // selects all elements with the class 'cells' in the HTML document. Will be used to select the cellss in the Tic Tac Toe grid
const statusText = document.querySelector("#statusText"); // selects the element with the id 'statusText' in the HTML document. Wii be used to display the current players's turn or if the game is over.
const restartBtn = document.querySelector("#restartBtn"); // this will be a button that restarts the game
const winConditions = [ // array of arrays. Each array represents a possible winning combination in the game.
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", "", ]; // an array of empty string. Each element in the array represents a cell in the grid and the value of the element represents the player who occupies that cell
let currentPlayer = "X"; // represents the player whose turn it is
let running = false; // represents the state of the game. It is set to 'false' because the game has not started yet

initializeGame(); // the function is called

function initializeGame(){ 
    cells.forEach(cell => cell.addEventListener("click", cellClicked)) // event listener for each cell in the grid to call 'cellClicked' function when clicked
    restartBtn.addEventListener("click", restartGame); // will call 'restartGame' function when the restartBtn is clicked
    statusText.textContent = `${currentPlayer}'s turn`; // it sets the text to show the current player's turn
    running = true; // running is set to true
   
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex"); // cellIndex is added to the HTML representing the cell in the Tic Tac Toe grid. This refers to the cell element that was clicked
    if(options[cellIndex] != "" || !running){ // checks if the cell is already occupied or if the game is not running. If either of these conditions is true, the function returns and does nothing
        return;  
    }
    updateCell(this, cellIndex); // calls the updateCell function with the clicked cell and its index as arguments
    checkWinner(); // calls the function to see if the game is over
}
function updateCell(cell, index){ 
    options[index] = currentPlayer; // updates the 'options' array at the given index with the current player's symbol
    cell.textContent = currentPlayer; // updates the text of the cell element to show the current player's symbol
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X"; // swaps the value of 'currentPlayer' between X and O 
    statusText.textContent = `${currentPlayer}'s turn`; // updates the 'statusText' element to show the current player's turn
}
function checkWinner(){
    let roundWon = false; // will track if the current player has won the game

    for(let i = 0; i < winConditions.length; i++){  // loops trough 'winConditions' array and checks if the current player has won by mathing three cells in a row. If a win is found, 'roundWon' is set to 'true' and the loop is exited
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if (!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else {
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", "", ];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}