import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromStore from '../../store';
import {Brewery} from '../../models/brewery';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.css']
})

export class BrewListComponent implements OnInit {

  breweries$ = new Observable<Brewery[]>();
  displayedColumns: string[] = ['name', 'type', 'location', 'phone'];

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('page')) === null) {
      sessionStorage.setItem('page', `${1}`);
    }
    this.pagination('init');
  }

  pagination(mode) {
    let page = JSON.parse(sessionStorage.getItem('page'));
    switch (mode) {
      case 'increment': {
        if (page < 805) {
          sessionStorage.setItem('page', `${++page}`);
        }
        break;
      }

      case 'decrement': {
        if (page < 805) {
          sessionStorage.setItem('page', `${--page}`);
        }
        break;
      }

      default: {
        break;
      }
    }
    this.store.dispatch(new fromStore.LoadBreweries(JSON.parse(sessionStorage.getItem('page'))));
    this.breweries$ = this.store.select(fromStore.getBreweries);
  }
}
