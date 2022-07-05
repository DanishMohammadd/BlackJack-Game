
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCards(){
    let randomNumber = Math.floor( Math.random() * 13 ) +1;
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber === 1){
        return 11;
    }
    else{
        return randomNumber;
    }

}

function startGame(){
    isAlive = true;
    let firstCard = getRandomCards();
    let secondCard = getRandomCards();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;    
    renderGame();
}

function renderGame(){
    cardsEl.innerText = "Cards: " ;
    for(let i = 0; i< cards.length; i++){
        cardsEl.innerText += cards[i] + "-";
    }
    sumEl.innerText = "Sum: " + sum;

    if(sum <= 20){
        message = ("do u want to draw a new card");
    }
    else if(sum === 21){
        message = ("You have got the blackjack");
        hasBlackJack = true;
    }else{
        message = ("You are out of the game");
        isAlive = false;
    }
    
    console.log(message);
    messageEl.innerText = message;
    
    
}
 
function newCard(){
    if(isAlive === true && hasBlackJack === false){

    let card = getRandomCards();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
}
}