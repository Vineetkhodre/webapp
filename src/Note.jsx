import React from 'react';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
function Note(props1) {
    const classes = useStyles();
    const deleteNote=()=>{
        props1.deleteItem(props1.id);
    }
    return (
    <div className="note">
        <div><p>{props1.title}</p></div>
        <br></br>
        <div><p>{props1.content}</p></div>
        <br></br>
        <div>
        <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={deleteNote} 
        >
        <DeleteIcon/>
        </Button>
        </div>
        </div>
    )
}

export default Note;
