export interface Phase{
	id: string,
	name: string
}

export interface Card{
	struct: "monster" | "spell" | "trap",
	id: string,
	name: string,
	life: number,
	attack: number
}

