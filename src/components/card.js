import React from "react";
import '../App.css';
import wrongandsad from './images/wrongandsad.png';
import correct from './images/correct.png';
import wrong from './images/wrong.png';
import face from './images/face.png';





class Card extends React.Component {




    
getIndex(image){
    var imageIndex = [];

    for (var i = 0; i < image.length ; i++){
        for (var j = 0; j < image.length ; j++){
        imageIndex.push(i);
       }
    }

    return imageIndex;
}





    render() {
        const image = [correct, wrong, wrongandsad];
        var indexImage = this.getIndex(image);



        return (
            <div className="flip-game">
                {indexImage
                .map((Element,i)=>
                {
                    return(
                        <div className="flip-card" key={i} id={[Element]}>
                            <img className="back-face" src={image[Element]} alt="wrong" />
                            <img className="front-face" src={face} alt="wrong" />
                        </div>
                    );
                }
)                
                
                }
                </div>
        );
    }

};

export default Card;