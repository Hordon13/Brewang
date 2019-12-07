import {Component, OnInit, HostListener} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromStore from '../../store';
import {Brewery} from '../../models/brewery';
import {BreweryService} from '../../services';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.css']
})

export class BrewListComponent implements OnInit {

  breweries$ = new Observable<Brewery[]>();
  displayedColumns: string[] = ['name', 'location', 'contact'];
  lastID: number;

  constructor(private store: Store<fromStore.AppState>, private breweryService: BreweryService) {
  }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('page')) === null) {
      sessionStorage.setItem('page', `${1}`);
    }
    this.pagination('init');
    this.breweryService.getLastBrewery().subscribe((brew: Brewery) => {
      this.lastID = brew[0].id;
    });
  }

  pagination(mode) {
    let page = JSON.parse(sessionStorage.getItem('page'));
    switch (mode) {
      case 'increment': {
        if (page <= Math.ceil(this.lastID / 10)) {
          sessionStorage.setItem('page', `${++page}`);
        }
        break;
      }

      case 'decrement': {
        if (page > 1) {
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

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.pagination('increment');
    }

    if (event.key === 'ArrowLeft') {
      this.pagination('decrement');
    }
  }
}
