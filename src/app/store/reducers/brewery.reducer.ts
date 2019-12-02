import * as fromBrewery from '../actions/brewery.actions';
import {Brewery} from '../../models/brewery';

export interface BreweryState {
  data: Brewery[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [
    {
      id: 299,
      name: 'Almanac Beer Company',
      brewery_type: 'micro',
      street: '651B W Tower Ave',
      city: 'Alameda',
      state: 'California',
      postal_code: '94501-5047',
      country: 'United States',
      longitude: '-122.306283180899',
      latitude: '37.7834497667258',
      phone: '4159326531',
      website_url: 'http://almanacbeer.com',
      updated_at: '2018-08-23T23:24:11.758Z',
      tag_list: []
    },
    {
      id: 300,
      name: 'Almanac Beer Company',
      brewery_type: 'micro',
      street: '651B W Tower Ave',
      city: 'Alameda',
      state: 'California',
      postal_code: '94501-5047',
      country: 'United States',
      longitude: '-122.306283180899',
      latitude: '37.7834497667258',
      phone: '4159326531',
      website_url: 'http://almanacbeer.com',
      updated_at: '2018-08-23T23:24:11.758Z',
      tag_list: []
    },
    {
      id: 301,
      name: 'Almanac Beer Company',
      brewery_type: 'micro',
      street: '651B W Tower Ave',
      city: 'Alameda',
      state: 'California',
      postal_code: '94501-5047',
      country: 'United States',
      longitude: '-122.306283180899',
      latitude: '37.7834497667258',
      phone: '4159326531',
      website_url: 'http://almanacbeer.com',
      updated_at: '2018-08-23T23:24:11.758Z',
      tag_list: []
    }
  ],
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
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }
  }

  return state;
}

export const getBreweryLoading = (state: BreweryState) => state.loading;
export const getBreweryLoaded = (state: BreweryState) => state.loaded;
export const getBreweries = (state: BreweryState) => state.data;
