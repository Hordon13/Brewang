import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromBrewery from './brewery.reducer';

export interface AppState {
  breweries: fromBrewery.BreweryState;
}

export const reducers: ActionReducerMap<AppState> = {
  breweries: fromBrewery.reducer,
};

export const selectBreweries = (state: AppState) => state.breweries;

export const getBreweries = createSelector(selectBreweries, fromBrewery.getBreweries);
export const getBrewery = createSelector(selectBreweries, fromBrewery.getBrewery);
export const getBreweryLoaded = createSelector(selectBreweries, fromBrewery.getBreweryLoaded);
export const getBreweryLoading = createSelector(selectBreweries, fromBrewery.getBreweryLoading);
