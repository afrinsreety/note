import React from 'react'

export default function Outputs({notes,deleteNote, onEditButton}) {
  return (
    <div className='output-container' >
				<table className='data-table' border="2">
					<tr>
						<th>No</th>
						<th>Date</th>
						<th>Title</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
					{
						notes.map(function (item, index) {
							return (
							
							<tr key={index}>
								<td>{index + 1}</td>
								<td>{item.date}</td>
								<td>{item.title}</td>
								<td>{item.description}</td>
								<td>
									<div className='action-btn'>
										<button onClick={()=>{
											onEditButton(item, index);
										}} className='edit-btn'>Edit</button>
										<button onClick={()=>{
											deleteNote(item.title);
										}}  className='delete-btn'>Delete</button>
									</div>
								</td>
							</tr>)
						})
					}
				</table>
			</div>
  )
}
