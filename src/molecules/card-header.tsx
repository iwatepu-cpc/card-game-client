import React from "react";


import NameText from "atoms/name-text";

interface Props {
	text: string,
	icon: string,
	style?: any
}

export default (props: Props) =>{
	const {text, style} = props
	return (<Container style={style}>
		<NameText text={text}/>
	</Container>)
}

const Container = styled.div``