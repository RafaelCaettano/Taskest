import { TasksState, tasksReducer } from "./reducers/tasks.reducer"

export interface AppState {
  tasks: TasksState
}

export const reducers = {
  tasks: tasksReducer
}