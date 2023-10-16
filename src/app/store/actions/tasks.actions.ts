import { Task, Paginacao } from "@interfaces";
import { createActionGroup, emptyProps, props } from "@ngrx/store";


export const TasksActions = createActionGroup({
  source: 'Tasks State',
  events: {
    getTasks: props<{ paginacao: Paginacao }>(),
    getTasksSuccess: props<{ tasks: Task[] }>(),
    getTasksError: props<{ error: any }>(),

    getTaskById: props<{ id: number }>(),
    getTaskByIdSuccess: props<{ task: Task }>(),
    getTaskByIdError: props<{ error: any }>(),

    searchTask: props<{ search: string }>(),
    searchTaskSuccess: props<{ tasks: Task[] }>(),
    searchTaskError: props<{ error: any }>(),

    createTask: props<{ task: Task }>(),
    createTaskSuccess: props<{ task: Task }>(),
    createTaskError: props<{ error: any }>(),

    updateTask: props<{ task: Task }>(),
    updateTaskSuccess: props<{ task: Task }>(),
    updateTaskError: props<{ error: any }>(),

    deleteTask: props<{ id: number }>(),
    deleteTaskSuccess: emptyProps(),
    deleteTaskError: props<{ error: any }>(),

    selectTask: props<{ task: Task }>(),
  },
});