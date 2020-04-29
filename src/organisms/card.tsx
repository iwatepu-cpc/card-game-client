import React from "react"

import NameText from "atoms/name-text"

interface Props {
	name: string,
	description: string,
	image: URL,
	struct: "monster" | "spell" | "trap",
	life: number,
	attack: number
}

export default (props: Props) =>{
	return (<div>
		
	</div>)
}