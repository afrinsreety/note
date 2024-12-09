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
	let [currentIndex, setCurrentIndex] = useState(null);
	const [notes, setnotes] = useState(notesFromLocalStorage || []);

	function onInputChange(e) {
		setnote({
			...note,
			[e.target.name]: e.target.value
		});
		// console.log(note)

	}

	function onSubmit(e) {
		e.preventDefault();

		if(currentIndex !== null) {
			onUpdate(e);
		} else {
			onSave(e);
		}

	}


	function onSave(e) {
		
		setnotes([...notes, note]);
		let stringNotes = JSON.stringify([...notes, note]);
		localStorage.setItem("notes", stringNotes);
		setnote({
			title: "",
			description: "",
			date: ""
		});
	}

	function onEdit(noteLocal, index) {
		setnote({
			title: noteLocal.title,
			description: noteLocal.description,
			date: noteLocal.date
		});

		setCurrentIndex(index);
	}
	function onUpdate(e) {
		const updatedNotes = notes.map((item, index) => {
			if (index === currentIndex) {
				return note;
			}
			return item;
		});
		setnotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
		setnote({
			title: "",
			description: "",
			date: ""
		});
		setCurrentIndex(null);
	}

	function deleteNote(title) {
		const updatedNotes = notes.filter((item) => item.title !== title);
		setnotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
	}


	return (
		<div className="container">
			< Inputs currentIndex={currentIndex} note={note} onInputChange={onInputChange}
				onSubmit={onSubmit}/>
			<Outputs onEdit={onEdit} deleteNote={deleteNote} notes={notes} />
		</div>
	);
}

export default App;
