import './../App.css';
import React, { useState, useEffect } from 'react'
import Inputs from './Inputs';
import Outputs from './Outputs';


function NoteParent() {
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

	useEffect(()=>{
		console.log("skl updating ", notes)
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes])

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
			onUpdate();
		} else {
			onSave();
		}

	}
	function getCookie(cookieName){
		let cookies = document.cookie.split(";");
		let cookieValue = cookies.find(cookie => cookie.includes(cookieName+"="));
		return cookieValue.split("=")[1].trim();
	}

	async function sendToFirebase(note){

		let url = "https://firestore.googleapis.com/v1/projects/enote-2025/databases/(default)/documents/notes?key=AIzaSyDXAwsDhK38AfoeO_zrwVb87qG01JUIpIE";

		console.log("azs token", getCookie("idToken"));

		let headers = {	
			'Content-Type': 'application/json',
			'Authorization': 'Bearer '+getCookie("idToken")
		}

		let body = {
			"fields": {
			  "title": { "stringValue": note.title },
			  "description": { "stringValue": note.description },
			  "date": { "timestampValue": new Date(note.date).toISOString() },
			  "userId": { "stringValue": getCookie("localId") }
			}
		  }

		  let response = await fetch(url,{
			method:"POST",
			headers: headers,
			body: JSON.stringify(body)
		  })

		  let data = await response.json();

		  console.log(data);
	}


	function onSave() {
		setnotes([...notes, note]);
		// let stringNotes = JSON.stringify([...notes, note]);
		// localStorage.setItem("notes", stringNotes);
		sendToFirebase(note);
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
		// localStorage.setItem("notes", JSON.stringify(updatedNotes));
		onReset();
	}

	function deleteNote(index) {
		const updatedNotes = [...notes];

		 updatedNotes.splice(index, 1);
		setnotes(updatedNotes);
		// localStorage.setItem("notes", JSON.stringify(updatedNotes));
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

export default NoteParent;
