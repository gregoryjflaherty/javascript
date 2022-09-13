function makeDeck(){
    const suits = ['hearts', 'diamonds', 'spades', 'clubs']
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A'
    const deck = []
    suits.forEach((suit) => 
        values.split(",").forEach((value) => 
            deck.push({
                value,
                suit
            })
        )
    )
    return deck
}

function drawCard(deck){
    return deck.pop()
}

const myDeck = makeDeck()
const card1 = drawCard(myDeck)


