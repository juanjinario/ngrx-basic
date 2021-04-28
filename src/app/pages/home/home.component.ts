import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from 'src/app/redux/actions/count.actions';
import { IAppState } from 'src/app/core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  $count: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.$count = this.store.select('count');
  }

  ngOnInit(): void {
  }

  add() {
    this.store.dispatch(actions.increment());
  }

  subtract() {
    this.store.dispatch(actions.decrement());
  }

}
