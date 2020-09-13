import React from "react";
import '../App.css';






class Alert extends React.Component {









    render() {
        
        return (
            <div>
                <div className="popup" id="popup-1">
                    <div className="overlay"></div>
                    <div className="content">
                        
                        <h1 className="upper">Congratulations</h1>
                        <h1 className="lower">You Won</h1>
                    </div>
                </div>
                <div className="popup" id="popup-2">
                    <div className="overlay"></div>
                    <div className="content">

                        <h1 className="upper">Game over</h1>
                        <h1 className="lower">Thank you for playing</h1>
                    </div>
                </div>
            </div>  
           
        );
    }

};

export default Alert;