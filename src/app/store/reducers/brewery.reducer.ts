import * as fromBrewery from '../actions/brewery.actions';
import {Brewery} from '../../models/brewery';
import {act} from '@ngrx/effects';

export interface BreweryState {
  data: Brewery[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromBrewery.BreweryActions
): BreweryState {
  switch (action.type) {
    case '[BREW_LIST] Load Breweries': {
      return {
        ...state,
        loading: true
      };
    }

    case '[BREW_LIST] Load Breweries Fail': {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case '[BREW_LIST] Load Breweries Success': {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
  }

  return state;
}

export const getBreweryLoading = (state: BreweryState) => state.loading;
export const getBreweryLoaded = (state: BreweryState) => state.loaded;
export const getBreweries = (state: BreweryState) => state.data;
