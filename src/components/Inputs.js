export default function States({ onInputChange, onSave, note }) {
	return (
		<div>
			<div className=''>
				<h3>Create a note </h3>
				<form method="POST" className="form" onSubmit={onSave}>
					<div className='formContainer'>
						<div className='input-container'>
							<label>Title: </label>
							<input value={note.title} name="title" type="text" onChange={onInputChange}  required/>
						</div>
						<div className='input-container'>
							<label>Description : </label>
							<input value={note.description} name="description" type="text"  onChange={onInputChange} required/>
						</div>
						<div className='input-container'>
							<label>Date : </label>
							<input value={note.date} name="date" type="date"  onChange={onInputChange} required/>
						</div>
						<div className='input-container'>
							<button type="submit" className='btn-save'>Save</button>
						</div>
					</div>
				</form>

			</div>
		</div>
	)

}