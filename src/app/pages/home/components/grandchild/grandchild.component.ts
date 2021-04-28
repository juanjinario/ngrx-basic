import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/core/models';
import * as actions from 'src/app/redux/actions/count.actions';
@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit {

  $count: Observable<number>;

  constructor(private store: Store<IAppState>) {
    this.$count = this.store.select('count');
  }

  ngOnInit(): void {
  }

  reset() {
    this.store.dispatch(actions.reset());
  }

}
