import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as fromServices from '../../services';
import * as acActions from '../actions/autocomplete.action';
import {ACActions} from '../actions';

@Injectable()
export class ACEffects {
  constructor(private actions$: Actions, private breweryService: fromServices.BreweryService) {
  }

  @Effect()
  getMatches$ = this.actions$.pipe(
    ofType<ACActions>(acActions.AC_SEARCH),
    switchMap((action) => {
      return this.breweryService.autocomplete(action.payload).pipe(
        map(matches => new acActions.ACSearchSuccess(matches)),
        catchError(error => of(new acActions.ACSearchFail(error)))
      );
    })
  );
}
