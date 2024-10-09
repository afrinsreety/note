export default function States({ onInputChange, onSave }) {
	return (
		<div>
			<div className=''>
				<h3>Create a note </h3>
				<form method="POST" className="form" onSubmit={onSave}>
					<div className='formContainer'>
						<div className='input-container'>
							<label>Title: </label>
							<input name="title" type="text" onChange={onInputChange}  required/>
						</div>
						<div className='input-container'>
							<label>Description : </label>
							<input name="description" type="text"  onChange={onInputChange} required/>
						</div>
						<div className='input-container'>
							<label>Date : </label>
							<input name="date" type="date"  onChange={onInputChange} required/>
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