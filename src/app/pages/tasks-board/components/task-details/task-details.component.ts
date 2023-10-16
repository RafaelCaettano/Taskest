import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Task } from '@interfaces';
import { Store } from '@ngrx/store';
import { AppState, TasksActions, TasksSelectors } from '@store';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent implements OnInit{

  task: Task = new Task();
  taskForm: FormGroup;
  edicao: boolean = false;
  
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getSelectedTask();
    this.createForm();
  }

  getSelectedTask(): void {
    this.store.select(TasksSelectors.getSelectedTask).subscribe(task => {
      if (task) {
        this.task = task;
        this.edicao = true;
      }
    });
  }

  createForm(): void {
    this.taskForm = this.fb.group({
      id: [ this.task.id ],
      titulo: [ this.task.titulo ],
      descricao: [ this.task.descricao ],
      status: [ this.task.status ]
    });
  }

  deleteTask(task: Task): void {
    this.store.dispatch(TasksActions.deleteTask({ id: task.id }));
    this.store.select(TasksSelectors.getSelectedTaskLoaded).subscribe(({ loaded, selectedTask }) => {
      
    });
  }

  getNewTask(): void {
    if (this.taskForm.valid) {
      const task: Task = this.taskForm.value;

      if (this.edicao) this.updateTask(task);
      else this.createTask(task);
    }
  }

  updateTask(task: Task): void {
    this.store.dispatch(TasksActions.updateTask({ task }));
    this.store.select(TasksSelectors.getSelectedTaskLoaded).subscribe(({ loaded, selectedTask }) => {
      
    });
  }

  createTask(task: Task): void {
    this.store.dispatch(TasksActions.createTask({ task }));
    this.store.select(TasksSelectors.getSelectedTaskLoaded).subscribe(({ loaded, selectedTask }) => {
      
    });
  }

  get titulo(): FormControl {
    return this.taskForm.get('titulo') as FormControl;
  }

  get descricao(): FormControl {
    return this.taskForm.get('descricao') as FormControl;
  }

  get status(): FormControl {
    return this.taskForm.get('status') as FormControl;
  }
}
