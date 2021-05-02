import React, { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App =() => {
  
  const [addItem, setAddItem] = useState([]);
 

  const AddEvent = (note) => {
    // alert("i am clicked");
    setAddItem((oldItem) => {
      return [...oldItem, note]
    })
    console.log(note);
  }

  const onDelete = (id) => {
    // alert(" I am deleted");
    setAddItem( (oldItem) => {
      return oldItem.filter((currVal, indx) => {
        return indx !== id;
      })
    })
    
  }

  return (
    <>
      <Header></Header>
      <CreateNote passnote={AddEvent}></CreateNote>

       {addItem.map((currVal, ind) => {
          return <Note id={ind} key={ind} title={currVal.title} content={currVal.content} deleteNote={onDelete}></Note>
       })}
  
      <Footer></Footer>
    </>
  )

}

export default App;
