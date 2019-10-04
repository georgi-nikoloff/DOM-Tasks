function solve() {
  //First DOM Task
   let playerOneDeck = {}
   let playerTwoDeck = {}
   let allCards = document.querySelectorAll('.cards img')
   const winner = '2px solid green'
   const loser = '2px solid red'
   let player1Cards = document.querySelectorAll('.cards #player1Div img')
   let player2Cards = document.querySelectorAll('.cards #player2Div img')
   let spans = document.querySelectorAll('#result span')
   let firstPlayerSpan = spans[0]
   let secondPlayerSpan = spans[2]
   for (let i = 0; i < player1Cards.length; i++) {          //Filling player 1 deck with cards 
      const playerOneCard = player1Cards[i];
      playerOneDeck[playerOneCard.name] = playerOneCard;    //Setting [key:value] with same names.
   }
   for (let i = 0; i < player2Cards.length; i++) {          //Filling player 2 deck with cards 
      const playerTwoCard = player2Cards[i];
      playerTwoDeck[playerTwoCard.name] = playerTwoCard;
   }
   for (const cards of allCards) {
      cards.addEventListener('click', (e) => {                       // (e) => event
         let cardPower = e.currentTarget.getAttribute('name')        //current card
         e.currentTarget.setAttribute('src', './images/whiteCard.jpg')
         if (firstPlayerSpan.textContent.length > 0) {               //If span 1 is empty => fill span 2
            if (playerTwoDeck.hasOwnProperty(cardPower)) {
               secondPlayerSpan.textContent = cardPower
            } else {
               firstPlayerSpan.textContent = cardPower
            }
         } else {
            if (playerOneDeck.hasOwnProperty(cardPower)) {
               firstPlayerSpan.textContent = cardPower
            } else {
               secondPlayerSpan.textContent = cardPower
            }
         }
         if (firstPlayerSpan.textContent.length > 0 && secondPlayerSpan.textContent.length > 0) {
            if (Number(firstPlayerSpan.textContent) > Number(secondPlayerSpan.textContent)) {
               playerTwoDeck[secondPlayerSpan.textContent].style.border = loser
               playerOneDeck[firstPlayerSpan.textContent].style.border = winner
            } else if (Number(firstPlayerSpan.textContent) < Number(secondPlayerSpan.textContent)) {
               playerOneDeck[firstPlayerSpan.textContent].style.border = loser
               playerTwoDeck[secondPlayerSpan.textContent].style.border = winner
            } else {
               playerTwoDeck[secondPlayerSpan.textContent].style.border = winner
               playerOneDeck[firstPlayerSpan.textContent].style.border = winner
            }
            let history = document.getElementById('history')
            history.textContent += `[${firstPlayerSpan.textContent} vs ${secondPlayerSpan.textContent}] `
            firstPlayerSpan.textContent = ""
            secondPlayerSpan.textContent = ""
         }
      })
   }
}
