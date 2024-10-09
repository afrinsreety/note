import './App.css';
import React, {useState} from 'react'

function App() {
 const [title, setTitle] = useState("1st note");
 const [note,setnote] = useState();
 const [notes, setnotes] = useState([]);
 function changeTitle(event){
  setTitle(event.target.value);
  console.log("changing..", event.target.value);
 }
 function changeNote(event){
  setnote(event.target.value);
  console.log("changing...",event.target.value);
 }

 function onSave(){
  console.log("on save", title, note);

  console.log("notes", notes);
  debugger
  var localNotes = notes;
  
  localNotes.push({
    title: title,
    note: note
  })
  setnotes(localNotes);
  console.log("notes", notes);


 }
  return (
    <div>
      <h3>Create a note : {title}</h3>

      <div className='input-container'>
        <label>Title: </label>
        <input onChange={changeTitle}  />
      </div>
<h3>Create a note : {note}</h3>
       <div className='input-container'>
        <label>Note : </label>
        <textarea onChange={changeNote}></textarea>
      </div> 

      <div className='input-container'>
        <button onClick={onSave}>Save</button>
      </div> 


    </div>
  );
}

export default App;
