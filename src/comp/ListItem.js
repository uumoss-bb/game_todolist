import React from "react"

const ListItem = ({game}) => {

	const randomColor = Math.random() * (360 - 0) + 0
	const style = {
		backgroundColor: `hsl(${randomColor}, 60%, 50%)`
	}

	return (

		<div className = "listItem" style = {style}>

			<form>

				<p>
					{game}
				</p>

			</form>

		</div>
	)
}


export default ListItem
