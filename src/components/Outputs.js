import React from 'react'

export default function Outputs({notes}) {
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
							return (<tr>
								<td>{item.date}</td>
								<td>{item.title}</td>
								<td>{item.description}</td>
								<td>
									<div className='action-btn'>
										<button className='edit-btn'>Edit</button>
										<button className='delete-btn'>Delete</button>
									</div>
								</td>
							</tr>)
						})
					}
				</table>
			</div>
  )
}
