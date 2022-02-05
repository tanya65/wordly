import React,{Component, Fragment} from 'react';
import MainApi from '../api/main';
import WordApi from '../api/word';
import Game from './game/game.js';

import Header from './header/header.js';

class Home extends Component {

    constructor(){
        super();
        this.state={
            message:"old message",
            word:"",
            target:""
        }

        this.getMessage = this.getMessage.bind(this);
    }

    render(){
        return (
            <Fragment>
                <Header></Header>
                <Game></Game>

                {/* <h1>{this.state.message}</h1>
                <button onClick={this.getMessage}>click</button>
                <button onClick={e=>this.test()}>test word</button>

                <TextField id="standard-basic" variant="standard" onChange={e=>this.setState({word:e.target.value})}/>
                <Button onClick={e=>this.submit()}>Submit</Button>
                <div style={{display:this.state.success?"block":"none",backgroundColor:"pink",width:"100%",height:"100px"}}></div> */}
            </Fragment>
        )
    }

    submit(){
        console.log(this.state.word);
        if(this.state.word==this.state.target){
            this.setState({success:true});
        }
        else{
            this.setState({success:false});
        }
    }

    async test(){
        let word = "hello"; 
        console.log("word is ",word);
        word = await WordApi.getDifficultWord();
        console.log("word is ",word);
        this.setState({target:word});
    }

    getMessage(){
        let message = "new message";

        MainApi.sampleApi();

        // this.setState({message:})
    }

}

export default Home;