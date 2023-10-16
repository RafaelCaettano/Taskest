import { Component, OnInit, HostListener } from '@angular/core';
import { Paginacao, Task } from '@interfaces';
import { Store } from '@ngrx/store';
import { TasksActions, TasksSelectors, AppState } from '@store';

@Component({
  selector: 'app-tasks-board',
  templateUrl: './tasks-board.component.html',
  styleUrls: ['./tasks-board.component.scss']
})
export class TasksBoardComponent implements OnInit {

  tasks: Task[] = [];
  paginacao = new Paginacao();
  expandSidebar: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.getTasks(this.paginacao);
  }

  getTasks(paginacao: Paginacao): void {
    this.store.dispatch(TasksActions.getTasks({ paginacao }));
    this.store.select(TasksSelectors.getTasks).subscribe(tasks => {
      this.tasks.push(...tasks);
    });
  }

  onScroll() {
    this.paginacao = this.increasePage(this.paginacao);
    this.getTasks(this.paginacao);
  }

  increasePage(paginacao: Paginacao): Paginacao {
    let newPaginacao: Paginacao = JSON.parse(JSON.stringify(paginacao));
    newPaginacao.pagina++;
    return newPaginacao;
  }

  editTask(task: Task): void {
    this.store.dispatch(TasksActions.selectTask({ task }));
  }
}

