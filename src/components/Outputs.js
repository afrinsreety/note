import React from 'react'

export default function Outputs({notes,deleteNote, onEdit}) {
  return (
    <div className='output-container' >
				<table className='data-table' border="2">
					<tr>
						<th>Date</th>
						<th>Title</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
					{
						notes.map(function (item) {
							return (<tr key={item.title}>
								<td>{item.date}</td>
								<td>{item.title}</td>
								<td>{item.description}</td>
								<td>
									<div className='action-btn'>
										<button onClick={()=>{
											onEdit(item);
										}} className='edit-btn'>Edit {item.title}</button>
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
