import { Task } from "./task.interface";

export interface Paginacao {
	tasks: Task[];
	limite: number;
	pagina: number;
}

export class Paginacao implements Paginacao {
	constructor() {
		this.pagina = 0;
		this.limite = 40;
		this.tasks = [];
	}
}