import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
   
    const [expand, setExpand] = useState(false);
    const [note, setAddNote] = useState({
        title: '',
        content: ''
    });

    const NoteEvent = (event) => {

      const {name, value} = event.target;
      setAddNote((oldVal) => {
          return {
              ...oldVal,
              [name]: value
          }
      })
    }

    const AddNote = () => {
        props.passnote(note);
        setAddNote({
            title: '',
            content: ''
        })
    }

    const AddExpand = () => {
        setExpand(true);
    }

    const backTonormal = () => {
        setExpand(false);
    }

    return (
      <>
        <div className = "main_div"  onDoubleClick={backTonormal}>
            <div className = "main_note" >
                <form >
                  { expand ?
                    <input type = "text"
                    name="title"
                    value={note.title}
                    onChange = {NoteEvent}
                    placeholder = "Title"
                    autoComplete = "off" />: null }
                    <br />
                    <textarea rows = ""
                    column = ""
                    type = "text"
                    name="content"
                    onClick = {AddExpand}
                    value={note.content}
                    onChange = {NoteEvent}
                    placeholder = "write a note ..." />
                    <br />
                    {expand ?
                    <Button onClick={AddNote}>
                      <AddIcon className = "plus_sign" />
                    </Button> : null
                    }
                    
                </form> 
            </div>
        </div>

        </>
    )
}

export default CreateNote;