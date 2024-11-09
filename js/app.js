// Color matching memory game (Concentration)
// Memory Game or Concentration is a color matching memory game where you match two same colors
// until you matched the entire board of 16 tiles
// Background Information: I have an aunt that forgets alot, so I thought this game could help her
// also I know of people dealing with dementia and memory games are suppose to help them
// As a user, I want a page with shuffled cards then the cards spread out face down
// As a user, I want to see the cards in a row face down 
// As a user, I want to be able to click on one of the card and see if I can find the match for the card.

// This game you can play by yourself. 
// To play the memory game Concentration, also known as the Memory card game, you can follow these steps:
//BEGIN MemoryGame
// Step1: Initialize Game
// Initialize grid(e.g., 4 x4 grid with 16 tiles)
// DEFINE colors =( [List of color values, with each color duplicated to form pairs] e.g., ["red","red", "blue", "blue", ...])
// SHUFFLE the list of colors randomly
// CREATE cards array to hold each card with color value and state (face down)
// Assign each color from the shuffled list to a tile on the grid

// Step 2. Initalize Game State (Set up Game State)
// Set all tiles as "hidden"
// Set total pairs to total number of unique color pairs (e.g., 8 pairs in a 4 X4 grid)
// DEFINE flipped Cards as empty list
// DEFINE matchedPairs = 0
// DEFINE totalPairs = number of unique colors in colors list

// Step 3: Game Loop
// While matchedPairs < totalPairs
// WAIT for player to CLICK a card

// Step 4: On Card Click
// FUNCTION handleCardClick(card or Function handleEvent)
// IF card is already flipped or matched
// RETURN (ignore click)
// END IF
// FLIP card face up
// ADD card to flippedCards

// Step 5: Check for Match if Two Cards are flipped
// IF Length of flippedCards = 2
// Define firstCard = flippedCards[0]
// Define secondCard = flippedCards[1]

// If firstCard.color = secondCard.color
// Cards match
// SET both firstCard and secondCard as "matched"
// INCREMENT matchedPairs by 1

// Step 6: Check for Game End
// IF matchedPairs = totalPairs
// DISPLAY "You Win!" message
// BREAK the game loop
// END IF
// ELSE
// No match; reset after delay
// WAIT for 1 second
// FLIP firstCard and secondCard face down
// CLEAR flippedCardd
// END IF
// END IF
// END FUNCTION
// END WHILE

// Step 7: Restart Option
// FUNCTION restartGame() or Function resetGame
// RESET matchedPairs to 0
// Clear and shuffle colors
// REINITALIZE cards and display them face down
// END FUNCTION
// END MemoryGAme or resetGame to play again

// Explanation of Key Parts
// Game Initialization: Creates the color pairs, shuffles them, and sets up the
// game board with all cards face down.
// Game State Tracking: Uses flippedCards to temporarily store two clicked cards
// and matchedPairs to keep track of matched pairs.
// Matching Logic: Compares the color values of two cards; if they match, they
// stay flipped up, otherwise, they flip back down after a short delay.
// Win Conditon: Ends the game when all pairs are matched, displaying a winning message.
// Restart Option: Resets the game state and shuffles the cards, allowing the player to start a new game.

/*-------------- Constants -------------*/
// Define a constant for flip card matching memory game
//* Define game-specific constants here */
//const card =document.querySelectorAll(".card");
const tilesContainer = document.querySelector('.tiles');
const colorsMaster = ["aqua", "aquamarine", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal", "coral", "orchid", "plum", "salmon", "slateblue", "springgreen", "tomato", "violet"];
let colorCount = 8;
const colors = colorsMaster.slice(0, colorCount);
const colorsPicklist = [...colors, ...colors];
const tileCount = colorsPicklist.length;

//console.log(colorPicklist);

const colorCountPicker = document.querySelector('.color-count-picker');
colorCountPicker.addEventListener('change', function () {
    colorCount = parseInt(this.value);
    colors = colorsMaster.slice(0, colorCount);
    colorsPickList = [...colors, ...colors];
    tileCount -= colorsPicklist.length;
    renderTiles();
});


/*---------- Variables (state) ---------*/
// Define a variable for the user's choice
// Define a variable for the computer's choice
// Define a variable for the game message
/* Declare state variable to track game status */
//Game state
let revealedCount = 0;
let activeTile = null;
let awaitingEndofMove = false;

/*----- Cached Element References  -----*/
// Select the results display element
/* Cache DOM elements for efficient acess */
// Hidden Message Congratulations, You Win!
const winMessage = document.getElementById('winMessage')
// Reset Game button
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetGame)




/*-------------- Functions -------------*/
// Created tiles
// Invoke get player choice function from play function
function buildTile(color) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-color", color);
    element.setAttribute("data-revealed", "false");

    element.addEventListener("click", () => {
        const revealed = element.getAttribute("data-revealed");

        if (
            awaitingEndofMove
            || revealed === "true"
            || element === activeTile

        ) {
            return;
        }
        element.style.backgroundColor = color;

        if (!activeTile) {
            activeTile = element;
            return;
        }


        const colorToMatch = activeTile.getAttribute("data-color");
        if (activeTile) {
            const colorToMatch = activeTile.getAttribute("data-color");


        } else {
            console.error("activeTile is not defined or is nulll");
        }


        if (colorToMatch === color) {
            activeTile.setAttribute("data-revealed", "true");
            element.setAttribute("data-revealed", "true");


            awaitingEndofMove = false;
            activeTile = null;
            revealedCount += 2;

            if (revealedCount === tileCount) {
                winMessage.classList.remove('hidden')
            }

            return;
        }
        //console.log(activeTile);

        //down here
        awaitingEndofMove = true;

        setTimeout(() => {
            element.style.backgroundColor = null;
            activeTile.style.backgroundColor = null;

            awaitingEndofMove = false;
            activeTile = null;
        }, 1000);
    });
    return element;
}

// Render the game message to the DOM
function init() {
    // Initalize game status and set up inital conditions
    // Create card pairs
    // Build up tiles
    // created tiles with for loop method
    tilesContainer.innerHTML = '';
    for (let i = 0; i < tileCount; i++) {
        const randomIndex = Math.floor(Math.random() * colorsPicklist.length);
        const color = colorsPicklist[randomIndex];
        const tile = buildTile(color);

        colorsPicklist.splice(randomIndex, 1);
        tilesContainer.appendChild(tile);
        //console.log(color);
    }

}
// Assume this function is called when a tile
function handleEvent(event) {
    // Process user input or other events
    const activeTile = event.currentTarget// or however you’re targeting the tile
    if (activeTile) {
        const colorToMatch = activeTile.getAttribute("data-color");
        console.log("Color to match:", colorToMatch);
    } else {
        console.error("activeTile is null or undefined.");
    }
}

function resetGame() {
    // Reset the game to its inital state
    let revealedCount = 0;
    let activeTile = null;
    let awaitingEndofMove = false;

    tilesContainer.innerHTML = "";
    winMessage.classList.add('hidden')
    const newColorsPicklist = [...colors, ...colors];
    // Re-build the tiles
    for (let i = 0; i < tileCount; i++) {
        const randomIndex = Math.floor(Math.random() * newColorsPicklist.length);
        const color = newColorsPicklist[randomIndex];
        const tile = buildTile(color);

        newColorsPicklist.splice(randomIndex, 1);
        tilesContainer.appendChild(tile);
    }
}

/*----------- Event Listeners ----------*/

/* Attach event listeners to handle user interactions */
// Initialize the game when the script loads init();
// Add event listeners to all cards

document.querySelectorAll(".tile").forEach(tile => {
    tile.addEventListener("click", handleEvent);
});

//Initialize game
init();