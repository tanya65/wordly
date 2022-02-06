import { Component } from "react";
import Level from "./level";
import{ColorButton} from '../CustomButton';

class GameOptions extends Component{

    render(){
        return (
            <div className="options">
                <ColorButton variant="outlined" onClick={e=>this.props.selectLevel(Level.BEGINNER)}>Beginner</ColorButton>
                <ColorButton variant="contained" onClick={e=>this.props.selectLevel(Level.EXPERT)}>Expert</ColorButton>
            </div>
        )
    }


}

export default GameOptions;