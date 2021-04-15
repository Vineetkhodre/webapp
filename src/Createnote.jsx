import React from 'react';
import  { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Createnote(props) {
    const classes = useStyles();
   
    const [note, setNote] = useState(
        {
            title:"",
            content:""
        }
    )

    const InputEvent=(event)=>{
        const {name,value}= event.target;
        setNote(
            (old)=>{
            return{
                ...old,
                [name]:value
            };}

        
        );
    }

    const addEvent=()=>{
        props.passNote(note);
        setNote(
            {
                title:"",
                content:""
            }
        );
    }

    return (
        <>
        <TextField
          id="outlined-multiline-static"
          multiline
          name="title"
          value={note.title}
          onChange={InputEvent}
          defaultValue="Title"
          variant="standard"
        />
        
        <TextField
          id="outlined-multiline-static"
          multiline
          name="content"
          value={note.content}
          onChange={InputEvent}
          defaultValue="Write discription here..."
          variant="standard"
        />

      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        onClick={addEvent}
      >
        <AddIcon/>
      </Button>
      </>
       
    )
}

export default Createnote;
