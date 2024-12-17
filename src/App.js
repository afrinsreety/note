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
		debugger
		// console.log(note)

	}

	function onSubmit(e) {
		e.preventDefault();

		if(currentIndex !== null) {
			onUpdate();
		} else {
			onSave();
		}

	}


	function onSave() {
		setnotes([...notes, note]);
		let stringNotes = JSON.stringify([...notes, note]);
		localStorage.setItem("notes", stringNotes);
		setnote({
			title: "",
			description: "",
			date: ""
		});
	}

	function onEditButton(item, index) {
		setnote(item);
		setCurrentIndex(index);
	}

	function onUpdate() {
		let updatedNotes = [...notes];
		updatedNotes[currentIndex] = note;
		setnotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
		setnote({
			title: "",
			description: "",
			date: ""
		});
		setCurrentIndex(null);
	}

	function deleteNote(index) {
		const updatedNotes = notes.filter((item, localIndex) =>localIndex!== index);
		setnotes(updatedNotes);
		localStorage.setItem("notes", JSON.stringify(updatedNotes));
	}

	function onReset() {
		setnote({
			title: "",
			description: "",
			date: ""
		});
		setCurrentIndex(null);
	}


	return (
		<div className="container">
			< Inputs currentIndex={currentIndex} note={note} onInputChange={onInputChange}
				onSubmit={onSubmit} onReset={onReset}/>
			<Outputs onEditButton={onEditButton} deleteNote={deleteNote} notes={notes} />
		</div>
	);
}

export default App;
