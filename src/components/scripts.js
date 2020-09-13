const cards = document.querySelectorAll('.flip-card');
cards.forEach(card => card.addEventListener('click', flipCard));
export function flipCard()
{
    console.log('i was clicked')
    console.log(this);
}



