import { Button } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from '@mui/material/styles';

export const ColorButton = styled(Button)(() => ({
    width:'110px',
    margin:'10px',
    color: 'white',
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));