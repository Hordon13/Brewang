import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ACBrew} from '../../models/brewery';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  keyword: string;
  matches$ = new Observable<ACBrew[]>();
  myControl = new FormControl();

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit() {
  }

  update() {
    this.store.dispatch(new fromStore.ACSearch(this.keyword));
    this.matches$ = this.store.select(fromStore.getACMatches);
  }

  reset() {
    this.keyword = '';
    this.matches$ = new Observable<ACBrew[]>();
  }
}
