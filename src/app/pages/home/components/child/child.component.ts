import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/core/models';
import * as actions from 'src/app/redux/actions/count.actions';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  $count: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.$count = this.store.select('count');
  }

  ngOnInit(): void {
  }

  multiply() {
    this.store.dispatch(actions.multiply({num: 4}));
  }

  divide() {
    this.store.dispatch(actions.divide({num: 2}));
  }

}
