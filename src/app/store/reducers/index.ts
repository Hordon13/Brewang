import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromBrewery from './brewery.reducer';
import * as fromAC from './autocomplete.reducer';

export interface AppState {
  breweries: fromBrewery.BreweryState;
  ac: fromAC.ACState;
}

export const reducers: ActionReducerMap<AppState> = {
  breweries: fromBrewery.reducer,
  ac: fromAC.reducer
};

export const selectBreweries = (state: AppState) => state.breweries;
export const selectAC = (state: AppState) => state.ac;

export const getBreweries = createSelector(selectBreweries, fromBrewery.getBreweries);
export const getBrewery = createSelector(selectBreweries, fromBrewery.getBrewery);
export const getBreweryLoaded = createSelector(selectBreweries, fromBrewery.getBreweryLoaded);
export const getBreweryLoading = createSelector(selectBreweries, fromBrewery.getBreweryLoading);

export const getACMatches = createSelector(selectAC, fromAC.getACMatches);
export const getACLoaded = createSelector(selectAC, fromAC.getACLoaded);
export const getACLoading = createSelector(selectAC, fromAC.getACLoading);
