import './App.css';
import React, { useState } from 'react'

function App() {
	// declaring stats 
	const [title, setTitle] = useState("");
	const [note, setnote] = useState("");
	const [notes, setnotes] = useState([]);

	// declaring functions 
	function changeTitle(event) {
		setTitle(event.target.value);
		console.log("changing..", event.target.value);
	}
	function changeNote(event) {
		setnote(event.target.value);
		console.log("changing...", event.target.value);
	}

	function onSave() {
		var currentNote = {
			title: title,
			note: note
		}
		setnotes([...notes, currentNote]);
	}

	return (
		<div className='container'>
			<h3>Create a note </h3>
			<div className='formContainer'>
				<div className='input-container'>
					<label>Title: </label>
					<input onChange={changeTitle} />
				</div>
				<div className='input-container'>
					<label>Note : </label>
					<textarea onChange={changeNote}></textarea>
				</div>
				<div className='input-container'>
					<button className='btn-save' onClick={onSave}>Save</button>
				</div>
			</div>

			<div className='output-container' >
				<table className='data-table' border="2">
					<tr>
						<th>Title</th>
						<th>Note</th>
					</tr>
					{
						notes.map(function (item) {
							return (<tr>
								<td>{item.title}</td>
								<td>{item.note}</td>
							</tr>)
						})
					}
				</table>
			</div>
		</div>
	);
}

export default App;
