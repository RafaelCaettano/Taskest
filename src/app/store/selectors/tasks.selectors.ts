import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TasksState } from "../reducers/tasks.reducer";

const getTasksState = createFeatureSelector<TasksState>('tasks');
const getTasks = createSelector(getTasksState, (state) => state.tasks);
const getSelectedTask = createSelector(getTasksState, (state) => state.selectedTask);
const getPaginacao = createSelector(getTasksState, (state) => state.paginacao);
const getTasksError = createSelector(getTasksState, (state) => state.error);

const getTasksLoading = createSelector(getTasksState, (state) => 
  ({ 
    loaded: state.loaded,
    isLoading: state.isLoading
  })
);

const getSelectedTaskLoaded = createSelector(getTasksState, (state) => 
  ({ 
    loaded: state.loaded,
    isLoading: state.isLoading,
    selectedTask: state.selectedTask
  })
);

export const TasksSelectors = {
  getTasks,
  getSelectedTask,
  getPaginacao,
  getTasksLoading,
  getTasksError,
  getSelectedTaskLoaded
}