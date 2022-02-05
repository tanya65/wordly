import { Component } from "react";
import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
import Level from "./level";

const ColorButton = styled(Button)(() => ({
    width:'110px',
    margin:'10px',
    color: 'white',
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));

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