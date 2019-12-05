import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Brewery} from '../../models/brewery';
import * as fromStore from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-brew-detail',
  templateUrl: './brew-detail.component.html',
  styleUrls: ['./brew-detail.component.css']
})
export class BrewDetailComponent implements OnInit {

  brewery: Brewery;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private store: Store<fromStore.AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadBrewery(+this.route.snapshot.paramMap.get('id')));
    this.store.select(fromStore.getBrewery).subscribe((state: Brewery) => {
      this.brewery = state;
    });
    this.store.select(fromStore.getBreweryLoaded).subscribe((state: boolean) => {
      this.loaded = state;
    });
  }
}
