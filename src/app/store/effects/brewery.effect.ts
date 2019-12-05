import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as fromServices from '../../services';
import * as breweryActions from '../actions/brewery.action';
import {BreweriesActions} from '../actions';

@Injectable()
export class BreweryEffects {
  constructor(private actions$: Actions, private breweryService: fromServices.BreweryService) {
  }

  @Effect()
  loadBreweries$ = this.actions$.pipe(
    ofType<BreweriesActions>(breweryActions.LOAD_BREWERIES),
    switchMap((action) => {
      return this.breweryService.fetchBreweries(action.payload).pipe(
        map(breweries => new breweryActions.LoadBreweriesSuccess(breweries)),
        catchError(error => of(new breweryActions.LoadBreweriesFail(error)))
      );
    })
  );

  @Effect()
  loadBrewery$ = this.actions$.pipe(
    ofType<BreweriesActions>(breweryActions.LOAD_BREWERY),
    switchMap((action) => {
      return this.breweryService.fetchBrewery(action.payload).pipe(
        map(brewery => new breweryActions.LoadBrewerySuccess(brewery)),
        catchError(error => of(new breweryActions.LoadBreweryFail(error)))
      );
    })
  );
}
