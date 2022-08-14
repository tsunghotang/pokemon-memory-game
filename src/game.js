import { shuffle } from './shuffle';
import { startTimer } from './timer';
import { initModal } from './modal';

// images
import pikachu from '../images/25-pikachu.svg';
import gengar from '../images/94-gengar.svg';
import electrode from '../images/101-electrode.svg';
import snorlax from '../images/143-snorlax.svg';
import dragonite from '../images/149-dragonite.svg';
import mewtwo from '../images/150-mewtwo.svg';
import togepi from '../images/175-togepi.svg';
import wobbuffet from '../images/202-wobbuffet.svg';


let intervalId;
let moveCounter = 0;

// Generates the board by creating a Card element for each element in the shuffled array
// Each card element contains a face element (<img>) and back element (<div>)
// We add the necesary classes to each element and finally append it to the board
const generateBoard = (deck, board) => {
  // Generate a card for each element in the array
  deck.forEach((card) => {
    // Create the <div> element
    const cardEl = document.createElement('div');
    // Give <div> class of card
    cardEl.classList.add('pkm-card');
    // Create <img> element
    const imgEl = document.createElement('img');
    // Set the img src path to have the name of the current iteration
    imgEl.setAttribute("src", `${card}`);
    // Give imgEl a class of 'face'
    imgEl.classList.add('face');
    // Append <img> to <div>
    cardEl.appendChild(imgEl);

    // Create 'back' <div> element
    const back = document.createElement('div');
    // Give 'back' a class of 'back'
    back.classList.add('back');
    // Append 'back' to cardEl <div>
    cardEl.appendChild(back);

    // Append the cardEl to the board
    board.appendChild(cardEl);
  });
};

const addStats = () => {
  // Selectors
  const modalContent = document.querySelector(".modal-content");
  const minutes = document.getElementById('mm');
  const seconds = document.getElementById('ms');

  const stats = `<p class='stats'>Time to complete: <span>${minutes.innerText} Minutes and ${seconds.innerText} Seconds</span></p>
                 <p class='stats'> Moves Taken: <span>${moveCounter}</span</p>
                `;
  // Inject html into the modal
  modalContent.insertAdjacentHTML('beforeend', stats);
};

const winGame = () => {
  // Create a nodeList will all elements that have the ".flip" class
  // "flip" class adds the flip animation. We use it as the win condition as we dont remove it from the cards that matched
  const flippedCards = document.querySelectorAll(".flip");
  // if the nodeList contains 16 elements - all the cards
  if (flippedCards.length === 16) {
    // Stop the timer
    clearInterval(intervalId);
    // Insert HTML to the modal
    addStats();
    // Display the modal
    initModal();
  }
};

const incrementMoveCounter = () => {
  // Select the move counter element
  const counter = document.querySelector(".move-counter");
  // Increment the moveCounter variable
  moveCounter++;
  // update the HTML with the new value reference in the variable
  counter.innerHTML = moveCounter;
};

const match = (flippedCards) => {
  flippedCards.forEach((card) => {
  // For each card remove the "flipped" class (logic used to compare flipped cards)
    card.classList.remove("flipped");
    // Stop any further mouse clicks on the cards that are matched
    card.style.pointerEvents = "none";
  });
  // Allow for further mouse clicks on the rest of the board
  document.body.style.pointerEvents = "auto";
  // Increment the move counter by 1
  incrementMoveCounter();
  // Check to see if the game has been won
  winGame();
};

const noMatch = (flippedCards) => {
  // For each card remove the "flipped" class (logic used to compare flipped cards)and "flip" class (animation)
  flippedCards.forEach((card) => {
    // Delay the function so that the animation can play correctly
    // After 1000 miliseconds the two cards will have the class of "flip" and "flipped" removed
    setTimeout(() => {
      card.classList.remove('flipped');
      card.classList.remove('flip');
      // Allow for further mouse clicks on the rest of the board
      document.body.style.pointerEvents = "auto";
    }, 1000);
  });
  // Increment the move counter by 1
  incrementMoveCounter();
};

// method to check if the elements in the nodeList match
const checkCards = (flippedCards) => {
  // When there are two elements(cards) in the nodeList
  if (flippedCards.length === 2) {
    // Disable any further mouse clicks on other cards (affects the whole page because we call on the document obj)
    document.body.style.pointerEvents = "none";
    // Compare the two images src
    if (flippedCards[0].firstElementChild.src === flippedCards[1].firstElementChild.src) {
      // If match call match()
      match(flippedCards);
    } else {
      // If no match call noMatch()
      noMatch(flippedCards);
    }
  }
};

const flipCard = () => {
  // Set the element clicked to a variable (card)
  const clickedCard = event.target;
  // Add "flip" class to the card that was clicked ("flip adds the flip animation to the card")
  clickedCard.classList.add("flip");
  // Add "flipped" class to the card that was clicked
  // "flipped" class is used for the game logic (comparing the elements with the flipped class)
  clickedCard.classList.add('flipped');
  // Create a nodeList with all elements that have the class "flipped"
  const flippedCards = document.querySelectorAll(".flipped");
  // Call the checkCards method passing in the nodeList
  checkCards(flippedCards);
};


const initMemoryGame = () => {
  let timeStart = false;
  // Array of images
  const deck = [electrode, electrode, snorlax, snorlax, dragonite, dragonite, mewtwo, mewtwo, togepi, togepi, wobbuffet, wobbuffet, pikachu, pikachu, gengar, gengar];
  // Selectors
  const board = document.querySelector(".board");
  const cards = document.querySelectorAll(".pkm-card");
  const reset = document.querySelector(".reset-btn");


  // Shuffle the elements in the deck variable and store in a variable
  const shuffledDeck = shuffle(deck);

  // Generate the board with the elements in the shuffled array
  generateBoard(shuffledDeck, board);

  // Event listeners
  // Reload page if reset btn is clicked
  reset.addEventListener('click', () => location.reload() );

  // Adds event listener to the whole board.
  board.addEventListener('click', (event) => {
    // If the element clicked is the card..
    if (event.target.classList.contains("pkm-card")) {
      // Start the timer after the first click of one card
      // Executes the timer() function
      if (timeStart === false) {
        timeStart = true;
        intervalId = setInterval(startTimer, 1000);
      }
      // Call flipCard method
      flipCard();
    }
  });
};

export { initMemoryGame };
