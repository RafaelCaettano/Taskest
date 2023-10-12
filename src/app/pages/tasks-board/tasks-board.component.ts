import { Component, OnInit } from '@angular/core';
import { Paginacao } from '@interfaces/paginacao.interface';
import { Task } from '@interfaces/task.interface';
import { Store } from '@ngrx/store';
import { TasksActions } from '@store/actions/tasks.actions';
import { TasksSelectors } from '@store/selectors/tasks.selectors';
import { AppState } from '@store/state.store';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {
  tasks: Task[] = [];
  paginacao = new Paginacao();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getTasks(this.paginacao);
  }

  getTasks(paginacao: Paginacao): void {
    this.store.dispatch(TasksActions.getTasks({ paginacao }));
    this.store.select(TasksSelectors.getTasks).subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}

