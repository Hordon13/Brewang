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

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit() {
    this.breweries$ = this.store.select(fromStore.getBreweries);
    this.store.dispatch(new fromStore.LoadBreweries());
  }
}
