import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TaskService } from "../../shared/services/task.service";
import { TasksActions } from "@store/actions/tasks.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Task } from "@interfaces/task.interface";

@Injectable()
export class TasksEffects {

  constructor(
    private taskService: TaskService, 
    private actions$: Actions
  ) { }

  getTasksEffect = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.getTasks),
    switchMap(({ paginacao }) => this.taskService.getTasks(paginacao).pipe(
      map((tasks: Task[]) => TasksActions.getTasksSuccess({ tasks })),
      catchError(error => of(TasksActions.getTasksError({ error })))
    ))
  ));

  getTaskByIdEffect = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.getTaskById),
    switchMap(({ id }) => this.taskService.getTaskById(id).pipe(
      map((task: Task) => TasksActions.getTaskByIdSuccess({ task })),
      catchError(error => of(TasksActions.getTaskByIdError({ error })))
    ))
  ));

  searchTaskEffect = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.searchTask),
    switchMap(({ search }) => this.taskService.searchTask(search).pipe(
      map((tasks: Task[]) => TasksActions.searchTaskSuccess({ tasks })),
      catchError(error => of(TasksActions.searchTaskError({ error })))
    ))
  ));

  createTaskEffect = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.createTask),
    switchMap(({ task }) => this.taskService.createTask(task).pipe(
      map((task: Task) => TasksActions.createTaskSuccess({ task })),
      catchError(error => of(TasksActions.createTaskError({ error })))
    ))
  ));

  updateTaskEffect = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.updateTask),
    switchMap(({ task }) => this.taskService.updateTask(task).pipe(
      map((task: Task) => TasksActions.updateTaskSuccess({ task })),
      catchError(error => of(TasksActions.updateTaskError({ error })))
    ))
  ));

  deleteTaskEffect = createEffect(() => this.actions$.pipe(
    ofType(TasksActions.deleteTask),
    switchMap(({ id }) => this.taskService.deleteTask(id).pipe(
      map(() => TasksActions.deleteTaskSuccess()),
      catchError(error => of(TasksActions.deleteTaskError({ error })))
    ))
  ));
}