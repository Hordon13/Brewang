import {ActionReducerMap} from '@ngrx/store';
import * as fromBrewery from './brewery.reducer';

export interface AppState {
  breweries: fromBrewery.BreweryState;
}

export const reducers: ActionReducerMap<AppState> = {
  breweries: fromBrewery.reducer,
};
