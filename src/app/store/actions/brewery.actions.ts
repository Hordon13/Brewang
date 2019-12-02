import {Action} from '@ngrx/store';
import {Brewery} from '../../models/brewery';

export const LOAD_BREWERIES = '[BREW_LIST] Load Breweries';
export const LOAD_BREWERIES_FAIL = '[BREW_LIST] Load Breweries Fail';
export const LOAD_BREWERIES_SUCCESS = '[BREW_LIST] Load Breweries Success';

export class LoadBreweries implements Action {
  readonly type = LOAD_BREWERIES;
}

export class LoadBreweriesFail implements Action {
  readonly type = LOAD_BREWERIES_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadBreweriesSuccess implements Action {
  readonly type = LOAD_BREWERIES_SUCCESS;

  constructor(public payload: Brewery[]) {
  }
}

export type BreweryActions = LoadBreweries | LoadBreweriesFail | LoadBreweriesSuccess;
