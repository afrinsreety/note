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
	const [notes, setnotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

	function onInputChange(e) {
		setnote({
			...note,
			[e.target.name]: e.target.value
		});
		console.log(note)

	}


	function onSave(e) {
		e.preventDefault();
		setnotes([...notes, note]);
		localStorage.setItem("notes", JSON.stringify([...notes, note]));
	}

	return (
		<div className="container">
			< Inputs onInputChange={onInputChange}
				onSave={onSave} />
			<Outputs notes={notes} />
		</div>
	);
}

export default App;
