import * as fromAutocomplete from '../actions/autocomplete.action';
import {ACBrew} from '../../models/brewery';

export interface ACState {
  data: ACBrew[];
  loaded: boolean;
  loading: boolean;
}

export const initialState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromAutocomplete.ACActions
): ACState {
  switch (action.type) {
    case fromAutocomplete.AC_SEARCH: {
      return {
        ...state,
        loaded: false,
        loading: true
      };
    }
    case fromAutocomplete.AC_SEARCH_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        data: action.payload.slice(0, 5)
      };
    }
    case fromAutocomplete.AC_SEARCH_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
  }

  return state;
}

export const getACLoading = (state: ACState) => state.loading;
export const getACLoaded = (state: ACState) => state.loaded;
export const getACMatches = (state: ACState) => state.data;
