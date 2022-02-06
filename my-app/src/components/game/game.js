
import { Component } from "react";
import './game.scss';
import { Button, TextField } from "@mui/material";
import GameOptions from "./gameOptions";
import Level from './level';
import{ColorButton} from '../CustomButton';
import Confetti from 'react-confetti'
import SuccessDialog from '../Modals/success';

class Game extends Component{

    constructor(props){
        super(props);
        this.state={
            level:Level.BEGINNER,
            targetWord:"trial",
            attemptedWords:["abcde","fghij"],
            totalAttempts:5,
            attemptsLeft:4,
            guessWord:"11111",
            disableSubmit:true,
            isSuccess:false
        }
        this.selectLevel = this.selectLevel.bind(this);
        this.submitGuess = this.submitGuess.bind(this);
        this.setColor = this.setColor.bind(this);
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
                                word.split("").map((letter, index)=>
                                    <div className="wordLetter" style={{backgroundColor:this.setColor(letter,index)}}>
                                        <span style={{marginTop:"13px"}}>{letter.toUpperCase()}</span> 
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {this.remainingTrials()}   

                <SuccessDialog showDialog={this.state.isSuccess} />
                {this.state.isSuccess && <Confetti/>}

                <Button onClick={e=>this.test()}>test</Button>
                <ColorButton variant="outlined"  onClick={this.submitGuess} disabled={this.state.disableSubmit}>Submit</ColorButton>
               </div>
                
            </div>

        )
    }

    test(){
        this.setState({isSuccess:true});
        document.documentElement.scrollTop = 0;
    }

    refresh(){

    }

    setColor(letter,index){
        let color = "grey";
        if(letter?.toLowerCase()===this.state.targetWord.charAt(index)?.toLowerCase())
            color = "green";
        else if(this.state.targetWord.split("").findIndex(char=> char?.toLowerCase()==letter?.toLowerCase())>=0)
            color = "yellow";

        console.log("color:",color)
        return color;
    }

    submitGuess(){
        let guess = this.state.guessWord;
        for(let i=0;i<guess.length;i++){
            if(guess.charAt(i)=="1"){
                this.setState({disableSubmit:true});
                return;
            }
        }
        let attemptedWords = this.state.attemptedWords;
        attemptedWords.push(guess);
        let isSuccess = guess==this.state.targetWord?true:false;
        this.setState({attemptedWords,disableSubmit:true, guessWord:"11111", attemptsLeft:this.state.totalAttempts-this.state.attemptedWords.length, isSuccess});
    }

    remainingTrials(){
        let wordBlocks = [];
        wordBlocks.push(
            <div className="wordRow">
                {this.state.targetWord.split("").map((letter, index)=>
                    <div className="wordLetter" value={letter}>
                        <TextField id="standard-basic" variant="standard" 
                        value={this.state.guessWord?.charAt(index)!="1"? this.state.guessWord?.charAt(index):""}
                        InputProps={{inputProps: {style: { fontSize: 60,textAlign: "center" }}, disableUnderline:true}}
                        onChange={e=>this.handleChange(e, index)}/>
                    </div>
                )
            }
            </div>
        )   
          
        for(let index=0; index<this.state.attemptsLeft; index++){
            wordBlocks.push(
                <div className="wordRow">
                    {this.state.targetWord.split("").map(()=>
                        <div className="wordLetter"></div>
                    )
                }
                </div>
            )               
        }
        return wordBlocks;
    }

    handleChange(e, index){
        console.log("here at changed")
        let letter = e.target.value.trim();
        let guessWord = this.state.guessWord;
        if(letter?.length==1 && letter?.charAt(0)!="1"){
            guessWord = guessWord.substring(0,index)+letter.toUpperCase()+guessWord.substring(index+1);
        }
        else if(!letter?.length){
            guessWord = guessWord.substring(0,index)+"1"+guessWord.substring(index+1);
        }
        this.setState({guessWord});
        this.setSubmitButtonStatus(guessWord);
    }

    setSubmitButtonStatus(guess){
        console.log("here to check disabled")
        for(let i=0;i<guess.length;i++){
            if(guess.charAt(i)=="1"){
                console.log("found 1 at index: ",i );
                this.setState({disableSubmit:true});
                return;
            }
        }     
        console.log("good to go");
        this.setState({disableSubmit:false});
    }

    selectLevel(level){
        this.setState({level});
        console.log("level:", level)
    }

}

export default Game;