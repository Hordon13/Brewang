import * as fromBrewery from '../actions/brewery.action';
import {Brewery} from '../../models/brewery';

export interface BreweryState {
  data: Brewery[];
  brewery: Brewery;
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [],
  brewery: null,
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromBrewery.BreweriesActions
): BreweryState {
  switch (action.type) {
    case fromBrewery.LOAD_BREWERIES: {
      return {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromBrewery.LOAD_BREWERY: {
      return  {
        ...state,
        loading: true,
        loaded: false
      };
    }

    case fromBrewery.LOAD_BREWERIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload
      };
    }

    case fromBrewery.LOAD_BREWERY_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        brewery: action.payload
      };
    }

    case fromBrewery.LOAD_BREWERIES_FAIL || fromBrewery.LOAD_BREWERY_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getBreweryLoading = (state: BreweryState) => state.loading;
export const getBreweryLoaded = (state: BreweryState) => state.loaded;
export const getBreweries = (state: BreweryState) => state.data;
export const getBrewery = (state: BreweryState) => state.brewery;
