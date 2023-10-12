import { Task } from "./task.interface";

export interface TaskPaginacao {
	tasks: Task[];
	limite: number;
	pagina: number;
}

export class TaskPaginacao implements TaskPaginacao {
	constructor() {
		this.pagina = 0;
		this.limite = 0;
		this.tasks = [];
	}
}