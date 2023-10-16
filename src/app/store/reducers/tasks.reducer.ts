import { createReducer, on } from '@ngrx/store';
import { TasksActions } from "@store";
import { Task, Paginacao } from '@interfaces';

export class TasksState {
  tasks: Task[];
  selectedTask: Task | null;
  paginacao: Paginacao;
  isLoading: boolean;
  loaded: boolean;
  error: any

  constructor() {
    this.tasks = [];
    this.selectedTask = null
    this.paginacao = new Paginacao();
    this.isLoading = false;
    this.loaded = false;
  }
}

const initialState = new TasksState();

export const tasksReducer = createReducer(
  initialState,
  on(TasksActions.getTasks, (state, { paginacao }) => ({
    ...state,
    paginacao,
    isLoading: true,
    loaded: false
  })),
  on(TasksActions.getTasksSuccess, (state, { tasks }) => ({
    ...state,
    isLoading: false,
    loaded: true,
    tasks
  })),
  on(TasksActions.getTasksError, (state, { error }) => ({
    ...state,
    isLoading: false,
    loaded: false,
    error
  })),

  on(TasksActions.getTaskById, (state) => ({
    ...state,
    isLoading: true,
    loaded: false,
    selectedTask: null
  })),
  on(TasksActions.getTaskByIdSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    loaded: true,
    selectedTask: task
  })),
  on(TasksActions.getTaskByIdError, (state, { error }) => ({
    ...state,
    isLoading: false,
    loaded: false,
    selectedTask: null,
    error
  })),

  on(TasksActions.searchTask, (state) => ({
    ...state,
    isLoading: true,
    loaded: false
  })),
  on(TasksActions.searchTaskSuccess, (state, { tasks }) => ({
    ...state,
    isLoading: false,
    loaded: true,
    tasks
  })),
  on(TasksActions.searchTaskError, (state, { error }) => ({
    ...state,
    isLoading: false,
    loaded: false,
    tasks: [],
    error
  })),

  on(TasksActions.createTask, (state) => ({
    ...state,
    isLoading: true,
    loaded: false,
    selectedTask: null
  })),
  on(TasksActions.createTaskSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    loaded: true,
    selectedTask: task
  })),
  on(TasksActions.createTaskError, (state, { error }) => ({
    ...state,
    isLoading: false,
    loaded: false,
    selectedTask: null,
    error
  })),

  on(TasksActions.updateTask, (state) => ({
    ...state,
    isLoading: true,
    loaded: false,
    selectedTask: null
  })),
  on(TasksActions.updateTaskSuccess, (state, { task }) => ({
    ...state,
    isLoading: false,
    loaded: true,
    selectedTask: task
  })),
  on(TasksActions.updateTaskError, (state, { error }) => ({
    ...state,
    isLoading: false,
    loaded: false,
    selectedTask: null,
    error
  })),

  on(TasksActions.deleteTask, (state) => ({
    ...state,
    isLoading: true,
    loaded: false,
    selectedTask: null
  })),
  on(TasksActions.deleteTaskSuccess, (state) => ({
    ...state,
    isLoading: false,
    loaded: true,
    selectedTask: null
  })),
  on(TasksActions.deleteTaskError, (state, { error }) => ({
    ...state,
    isLoading: false,
    loaded: false,
    error
  })),

  on(TasksActions.selectTask, (state, { task }) => ({
    ...state,
    selectedTask: task
  })),
);

export const getTasksState = (state: TasksState) => state;