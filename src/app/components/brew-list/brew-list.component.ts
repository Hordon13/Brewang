import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromStore from '../../store';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.css']
})
export class BrewListComponent implements OnInit {

  public breweries = [];

  constructor(private store: Store<fromStore.AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      console.log(state);
    });
  }

}
