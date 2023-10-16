export interface Task {
	id: number;
	titulo: string;
	descricao: string;
	status: string;
}

export class Task implements Task {
	constructor() {
		this.descricao = '';
		this.id = 0;
		this.status = '';
		this.titulo = '';
	}
}