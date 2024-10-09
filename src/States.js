export default function States({ titlee, notee, saved }) {
	return (
		<div>
			<div className=''>
				<h3>Create a note </h3>
				<div className='formContainer'>
					<div className='input-container'>
						<label>Title: </label>
						<input type="text" onChange={titlee} />
					</div>
					<div className='input-container'>
						<label>Note : </label>
						<textarea onChange={notee}></textarea>
					</div>
					<div className='input-container'>
						<button className='btn-save' onClick={saved}>Save</button>
					</div>
				</div>
			</div>
		</div>
	)

}