import {Action} from '@ngrx/store';
import {ACBrew} from '../../models/brewery';

export const AC_SEARCH = '[AC] Search matches';
export const AC_SEARCH_FAIL = '[AC] Search matches failed';
export const AC_SEARCH_SUCCESS = '[AC] Search matches found';

export class ACSearch implements Action {
  readonly type = AC_SEARCH;

  constructor(public payload: string) {
  }
}

export class ACSearchFail implements Action {
  readonly type = AC_SEARCH_FAIL;

  constructor(public  payload: any) {
  }
}

export class ACSearchSuccess implements Action {
  readonly type = AC_SEARCH_SUCCESS;

  constructor(public payload: ACBrew[]) {
  }
}

export type ACActions = ACSearch | ACSearchFail | ACSearchSuccess;
