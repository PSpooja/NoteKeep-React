import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {
   const DeleteEvent = () => {
     props.deleteNote(props.id);
   }

    return ( 
      <>

        <div className = "note">
        <h3> {props.title} </h3> <br/>
        <p> {props.content} </p> 
        <Button style = {{ left: "240px", bottom: "18px" }} onClick={DeleteEvent}>
        <DeleteOutlineIcon className = "deleteIcon" />
        </Button> </div>

        </>
    )
}

export default Note;