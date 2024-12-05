import './App.css';
import React, { useState } from 'react'
import Inputs from './components/Inputs';
import Outputs from './components/Outputs';


function App() {
	// declaring states 
	const [note, setnote] = useState({
		title: "",
		description: "",
		date: ""
	});

	let notesFromLocalStorageString = localStorage.getItem("notes");
	let notesFromLocalStorage = JSON.parse(notesFromLocalStorageString);
	const [notes, setnotes] = useState( notesFromLocalStorage|| []);

	function onInputChange(e) {
		setnote({
			...note,
			[e.target.name]: e.target.value
		});
		// console.log(note)

	}


	function onSave(e) {
		e.preventDefault();
		setnotes([...notes, note]);
		let stringNotes = JSON.stringify([...notes, note]);
		localStorage.setItem("notes", stringNotes);
		setnote({
			title: "",
			description: "",
			date: ""
		});
	}

	function onEdit (noteLocal){
		setnote({
			title: noteLocal.title,
			description: noteLocal.description,
			date: noteLocal.date
		});

	}

	function deleteNote(title){
		const updatedNotes = notes.filter((item) => item.title !== title);
		setnotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
	}
	

	return (
		<div className="container">
			< Inputs note={note} onInputChange={onInputChange}
				onSave={onSave} />
			<Outputs onEdit={onEdit} deleteNote={deleteNote} notes={notes} />
		</div>
	);
}

export default App;
