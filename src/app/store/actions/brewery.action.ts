import {Action} from '@ngrx/store';
import {Brewery} from '../../models/brewery';

export const LOAD_BREWERIES = '[BREW_LIST] Load Breweries';
export const LOAD_BREWERIES_FAIL = '[BREW_LIST] Load Breweries Fail';
export const LOAD_BREWERIES_SUCCESS = '[BREW_LIST] Load Breweries Success';

export class LoadBreweries implements Action {
  readonly type = LOAD_BREWERIES;

  constructor(public payload: number) {
  }
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

export const LOAD_BREWERY = '[BREW_DETAILS] Load Breweries';
export const LOAD_BREWERY_FAIL = '[BREW_DETAILS] Load Breweries Fail';
export const LOAD_BREWERY_SUCCESS = '[BREW_DETAILS] Load Breweries Success';

export class LoadBrewery implements Action {
  readonly type = LOAD_BREWERY;

  constructor(public payload: number) {
  }
}

export class LoadBreweryFail implements Action {
  readonly type = LOAD_BREWERY_FAIL;

  constructor(public payload: any) {
  }
}

export class LoadBrewerySuccess implements Action {
  readonly type = LOAD_BREWERY_SUCCESS;

  constructor(public payload: Brewery) {
  }
}

export type BreweriesActions =
  LoadBreweries
  | LoadBreweriesFail
  | LoadBreweriesSuccess
  | LoadBrewery
  | LoadBreweryFail
  | LoadBrewerySuccess;
