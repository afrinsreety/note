import './App.css';
import React, { useState } from 'react'
import States from './States';


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
		<div className="container">
			< States titlee={changeTitle}
				notee={changeNote}
				saved={onSave} />

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
