let player = {
   name: "Oli",
   chips: 200
}


let thirdCard = Math.round((Math.random() * 11) + 2)
let cards = [] // array 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//let sumEl = document.querySelector("#sum-el")
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
   let randomNumber = Math.floor((Math.random() * 13) + 1)
   if (randomNumber > 10) {
      return 10
   } else if (randomNumber === 1) {
      return 11
   } else {
      return randomNumber
   }
}


function startGame() {
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()
}

function renderGame() {
   cardsEl.textContent = "Cards: "
   for (let i = 0; i < cards.length; i++) {
      cardsEl.textContent += cards[i] + " "
      console.log(("i") + i)
   }
   console.log(sum)
   sumEl.textContent = "Sum: " + sum;
   if (sum < 21) {
      message = 'do you want to draw a new card? '
   } else if (sum === 21) {
      message = "You've got Blackjack!"
      hasBlackJack = true
   } else {
      message = "You're are out of the game!"
      isAlive = false
   }
   messageEl.textContent = message
   console.log(cards)
}

function newCard() {
   //messageEl.textContent= "drawing a new card from deck"
   if (isAlive == true && hasBlackJack == false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      console.log(cards)
      renderGame()
   }

   // thirdCard = Math.round((Math.random() * 11) + 2)
}
//////////////////////////////
let course = {
   title: "Learn CSS grid for free",
   lessons: 16,
   creater: "per holgon",
   length: 63,
   level:2,
   isFree: true,
   tags:["html","css"]
}


console.log(course.tags)