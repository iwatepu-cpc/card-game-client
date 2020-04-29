import React from "react"



interface Props {
	text: string,
	style?: any
}

export default (props: Props) =>{
	const {text, style} = props
	return <div style={style}>{text}</div>
}