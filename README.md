# project-1
// Color matching memory game (concentration)
// This game you can play by yourself. 
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

Explanation of Key Parts
Game Initialization: Creates the color pairs, shuffles them, and sets up the game board with all cards face down.
Game State Tracking: Uses flippedCards to temporarily store two clicked cards and matchedPairs to keep track of matched pairs.
Matching Logic: Compares the color values of two cards; if they match, they stay flipped up, otherwise, they flip back down after a short delay.
Win Condition: Ends the game when all pairs are matched, displaying a winning message.
Restart Option: Resets the game state and shuffles the cards, allowing the player to start a new game.

link to game:

Attibutions: 
YouTube https://www.youtube.com/watch?v=bznJPt4t_4s
ChatGPT :
https://chatgpt.com/c/67298b0f-52b8-8005-99a1-a7b7c8d893a9
https://chatgpt.com/c/67299008-76cc-8005-96c7-2c163a88e341

CSS FLexbox Layout Guide https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-examples

Contrast Checker
https://webaim.org/resources/contrastchecker/?fcolor=E4C4ED&bcolor=000000

Technologies
HTML
CSS
Javascript
DOM 
