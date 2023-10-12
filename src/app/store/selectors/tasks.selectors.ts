import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "../reducers/tasks.reducer";

const getTasksState = createFeatureSelector<TasksState>('tasks');
const getTasks = createSelector(getTasksState, (state) => state.tasks);
const getSelectedTask = createSelector(getTasksState, (state) => state.selectedTask);
const getPaginacao = createSelector(getTasksState, (state) => state.paginacao);
const getTasksLoading = createSelector(getTasksState, (state) => { state.loaded, state.isLoading });
const getTasksError = createSelector(getTasksState, (state) => state.error);

export const TasksSelectors = {
  getTasks,
  getSelectedTask,
  getPaginacao,
  getTasksLoading,
  getTasksError
}