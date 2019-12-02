import {Injectable} from '@angular/core';

import {Effect, Actions, ofType} from '@ngrx/effects';
import * as breweryActions from '../actions/brewery.actions';
import * as fromServices from '../../services';

import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class BreweryEffects {
  constructor(private actions$: Actions, private breweryService: fromServices.BreweryService) {
  }

  @Effect()
  loadBreweries$ = this.actions$.pipe(ofType('[BREW_LIST] Load Breweries'))
    .pipe(
      switchMap(() => {
        return this.breweryService.fetchBreweries().pipe(
          map(breweries => new breweryActions.LoadBreweriesSuccess(breweries)),
          catchError(error => of(new breweryActions.LoadBreweriesFail(error)))
        );
      })
    );
}
