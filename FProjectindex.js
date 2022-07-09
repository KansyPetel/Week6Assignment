// We will our first class named "Class Card"

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }

//Now, we'll make our second class named "Class Deck" which will have two functions: createDeck and shuffleDeck.

} class Deck {
    constructor() {
        this.cards = [];    
    }

//At this step, we will create our function which will be named "createDeck". Then, we'll fill in our 26 cards 
//to deal to our two players. Each player will have 13 cards.
createDeck() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let ranks = ['J', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Q', 'K', 'A'];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            this.cards.push(new Card(suits[i], ranks[j], values[j]));
        }
    }
}
shuffleDeck() {
   let location1, location2, tmp;
   for (let i = 0; i < 1000; i++) {
       location1 = Math.floor((Math.random() * this.cards.length));
       location2 = Math.floor((Math.random() * this.cards.length));
       tmp = this.cards[location1];
       this.cards[location1] = this.cards[location2];
       this.cards[location2] = tmp;
    }
}
}class Player {
constructor(name) {
    this.playerName = name;
    this.playerCards = [];
}
}class Board {
constructor() {
    this.cardsInMiddle = [];
    this.players = [];
}
start(playerOneName, playerTwoName) {
    this.players.push(new Player(playerOneName));
    this.players.push(new Player(playerTwoName));
    let d = new Deck();
    d.createDeck();
    d.shuffleDeck();    
    this.players[0].playerCards = d.cards.slice(0, 13);
    this.players[1].playerCards = d.cards.slice(13, 26);
}
}let gameBoard = new Board();
gameBoard.start('Spider-man1', 'Spider-man2');
console.log(gameBoard.players);

//Note: We deal 26 cards to our two players as aske in the assignment. We gave "A" the higth value = 13. "J" will have the 
//smallest value.

