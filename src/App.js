import React from 'react';
//import logo from './logo.svg';
//import bgd from './components/images/bgd.jpg'
import './App.css';
import Main from './components/Main';
//import flipCard from './components/scripts.js'





class App extends React.Component {


  componentDidMount() {
    const cards = document.querySelectorAll('.flip-card');
   // const alert_win = document.getElementById("alert-win");
    let hasFlippedCardOne = false;
    let hasFlippedCardTwo = false;
    var firstCard,secondCard,thirdCard;
    let firstSecond=false;
    //let firstSecondThird = false;


    function welcomeScreen(){
      document.getElementById("popup-1-start").classList.toggle("active"); 
      setTimeout(function () { document.getElementById("popup-1-start").classList.toggle("active"); }, 5000);
    }

welcomeScreen();

    
    function flipCard() {
    this.classList.add('flip');
      if (!hasFlippedCardOne){
      hasFlippedCardOne= true;
      //hasFlippedCardTwo = false;
      firstCard = this;
      
      
    } else if(hasFlippedCardOne && !hasFlippedCardTwo) {
      //hasFlippedCardOne = false;
      hasFlippedCardTwo = true;

      secondCard=this;
      if(firstCard.id  === secondCard.id){
        firstSecond=true;
        firstCard.removeEventListener('click',flipCard);
        secondCard.removeEventListener('click', flipCard);
      }
       

    } 
      
  else {
        //hasFlippedCardOne = true;
        hasFlippedCardTwo = true;
        thirdCard = this;
        
if((secondCard.id === thirdCard.id) && firstSecond===true && thirdCard.id==="0" ){
   console.log("true");
  setTimeout(function () {
    document.getElementById("popup-1").classList.toggle("active"); 
     }, 1000);

}
else{
  setTimeout(function () { document.getElementById("popup-2").classList.toggle("active"); }, 1000);
}
        cards.forEach(card =>card.removeEventListener('click', flipCard));    
      }
    
   }


    (function shuffle() {
      cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
      });
    }) ();

    cards.forEach(card => card.addEventListener('click', flipCard));

  
    
  }



  render (){
    return(
        <Main></Main>
    );
  }
}

export default App;
