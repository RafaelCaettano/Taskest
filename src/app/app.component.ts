import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TasksActions } from '@store/actions/tasks.actions';
import { TasksSelectors } from './store/selectors/tasks.selectors';
import { AppState } from '@store/state.store';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(TasksActions.deleteTask({ id: 1 }));
    this.store.select(TasksSelectors.getTasks).subscribe(tasks => {
      console.log(tasks)
    });
  }
}
