/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
// What is ASCIIART? Check the README.md or Workshop to see why ASCIIART is defined in your file.
const ASCIIART = [
  `

  O   
 /|\\\  
 / \\\  

=========`,
  `

  O      
 /|\\\   
 /       


=========`,
  `

  O      
 /|\\\   


=========`,
  `

  O      
 /|      


=========`,
  `

  O      
  |      


=========`,
  `

  O      



=========`,
  `





=========`,
];

class VanishingMan {
  constructor(secretWord) {
    this.remainingGuesses = 6;
    this.secretWord = secretWord.toLowerCase().split("");
    this.lettersGuessed = [];
    this.gameState = "playing";
  }

  // Updates the game state based on remaining guesses and puzzle completion
  computeGameState() {
    if (this.remainingGuesses === 0) {
      this.gameState = "lost";
    } else if (!this.getSecretWordPuzzle().includes("#")) {
      this.gameState = "won";
    } else {
      this.gameState = "playing";
    }
  }

  // Reveals guessed letters or masks unguessed ones
  getSecretWordPuzzle() {
    return this.secretWord
      .map((char) =>
        char === " " || this.lettersGuessed.includes(char.toLowerCase())
          ? char
          : "#"
      )
      .join("");
  }

  // Provides feedback based on the current game state
  getGameStateMessage() {
    let artIndex;

    // Ensure artIndex is based on remaining guesses
    if (this.gameState === "playing") {
      artIndex = ASCIIART.length - this.remainingGuesses - 1;
      artIndex = Math.max(0, artIndex); // Handle cases where guesses are full
      return `There is a total of ${this.remainingGuesses} guesses remaining:\n\n\n${ASCIIART[artIndex]}`;
    }

    if (this.gameState === "lost") {
      return `Game Over, the word was "${this.secretWord.join("")}":\n\n${
        ASCIIART[0]
      }`;
    }

    if (this.gameState === "won") {
      return "Winner Winner Chicken Dinner, you won!";
    }
  }

  // Handles a player's guess
  submitGuess(guess) {
    guess = guess.toLowerCase();

    if (this.gameState !== "playing" || this.lettersGuessed.includes(guess)) {
      return;
    }

    this.lettersGuessed.push(guess);

    if (!this.secretWord.includes(guess)) {
      this.remainingGuesses -= 1;
    }

    this.computeGameState();
  }

  // Simulates a game by randomly guessing characters until completion
  static simulateVanishingMan(secretWord) {
    const game = new VanishingMan(secretWord);
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    while (game.gameState === "playing") {
      const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
      game.submitGuess(randomChar);
    }

    return game.getGameStateMessage();
  }
}
