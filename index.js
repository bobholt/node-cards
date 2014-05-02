var Deck = function( options ) {

  options = options || {};

  this.values = options.values || ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  this.suits = options.suits || ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
  this.jokers = options.jokers || 0;

  this.sort();

};

Deck.prototype.sort = function() {
  this.cards = [];

  this.values.forEach(function(value) {
    this.suits.forEach(function(suit) {
      this.cards.push({
        suit: suit,
        value: value,
        color: suit === 'Clubs' || suit === 'Spades' ? 'black' : 'red'
      });
    }, this);
  }, this);

  for ( var i = 0; i < this.jokers; i++ ) {
    this.cards.push({
      suit: null,
      value: 'Joker',
      color: null
    });
  }
};

// ### `shuffle`
// Randomizes the order of cards using Fisher-Yates shuffle
Deck.prototype.shuffle = function() {
  var tmp = null;
  var current = null;
  var top = this.cards.length;

  if ( top ) {

    while( --top ) {

      current = Math.floor( Math.random() * ( top + 1 ) );

      tmp = this.cards[ current ];

      this.cards[ current ] = this.cards[ top ];

      this.cards[ top ] = tmp;

    }
  }
}

module.exports = Deck;
