import React from "react";
//import { render } from "@testing-library/react";
import '../App.css';
import Board from './Board';
import Alert from './alert';
import GameStart from './gameStart'

class Main extends React.Component{



render(){
    return(
        <div className="main">
           <GameStart></GameStart>
            <Alert></Alert>
            <Board></Board>
            
        </div>
    );
}

};

export default Main;