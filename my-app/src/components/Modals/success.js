import { Component } from "react";
import { Button,Dialog } from "@mui/material";
import IceCreamImage from '../../resources/ice-cream-cup.png';
import{ColorButton} from '../CustomButton';

class SuccessDialog extends Component{

    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.showDialog)
        return (
            <Dialog onClose={this.refresh} open={this.props.showDialog} close={!this.props.showDialog} fullWidth={true} maxWidth="sm">
                <div style={{padding:"10%", textAlign:"center"}}>
                    <div style={{display:"inline-block", width:"100%", marginBottom:"10px"}}><img src={IceCreamImage} style={{width:"40%", maxWidth:"300px", minWidth:"200px"}}/></div>
                <h2>Bravo!!</h2>
                <p> You got it right. Up for another round?</p>

                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                    <ColorButton onClick={e=>this.closeDialog}>Nah, maybe later</ColorButton>
                    <ColorButton onClick={e=>this.closeDialog}>Yes, let's play</ColorButton>
                </div>
                </div>
                
            </Dialog>
        )
    }

}

export default SuccessDialog;