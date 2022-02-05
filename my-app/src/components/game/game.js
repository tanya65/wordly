
import { Component } from "react";
import './game.scss';
import { TextField } from "@mui/material";
import GameOptions from "./gameOptions";
import Level from './level';

class Game extends Component{

    constructor(props){
        super(props);
        this.state={
            level:Level.BEGINNER,
            targetWord:"trial",
            attemptedWords:["abcde","fghij"],
            totalAttempts:5,
            attemptsLeft:4
        }
        this.selectLevel = this.selectLevel.bind(this);
    }

    render(){
        return (

            <div id="game">

               <GameOptions selectLevel={this.selectLevel}></GameOptions>
               
               <div className="main">
                {
                    this.state.attemptedWords.map(word=>
                        <div className="wordRow">
                            {
                                word.split("").map(letter=>
                                    <div className="wordLetter">
                                        <span style={{marginTop:"13px"}}>{letter.toUpperCase()}</span> 
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {this.remainingTrials()}          

               </div>
               
            </div>

        )
    }

    remainingTrials(){
        let wordBlocks = [];
        for(let index=0; index<this.state.attemptsLeft; index++){
            wordBlocks.push(
                <div className="wordRow">
                    {this.state.targetWord.split("").map(letter=>
                        <div className="wordLetter" value={letter}>
                            <TextField id="standard-basic" variant="standard" 
                            InputProps={{inputProps: {style: { fontSize: 60,textAlign: "center" }}, disableUnderline:true}}
                            />
                        </div>
                    )
                }
                </div>
            )                  
        }
        return wordBlocks;
    }

    selectLevel(level){
        this.setState({level});
        console.log("level:", level)
    }

}

export default Game;