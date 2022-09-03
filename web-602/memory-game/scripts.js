console.log("we are working on a game");

const cards = document.querySelectorAll(".memory-card");
console.log(cards);

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle("flip");

  if (!hasFlippedCard) {
      hasFlippedCard = true;
      console.log(this);
      firstCard = this;
    } else {
      hasFlippedCard = false;
      secondCard = this;

      console.log({
          first: firstCard,
          second: secondCard,
        });
   
        if (firstCard.dataset.pokemon === secondCard.dataset.pokemon) {
            console.log("we have a match!");
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
        } else {

          setTimeout(function() {
          firstCard.classList.remove("flip");
          secondCard.classList.remove("flip");
          }, 1500)
        }
    }
}

function shuffle() {
  cards.forEach(function(card) {
    let randomPosition = Math.floor(Math.random()*12)
    console.log(randomPosition);
    card.style.order = randomPosition;
  })
}

shuffle()


cards.forEach(function(card) {
    card.addEventListener("click", flipCard);
    
});