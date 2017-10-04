import {Action} from '@ngrx/store';
import {Person} from '../../model/person';

export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SELECT = 'SELECT';
export const SELECT_SUCCESS = 'SELECT_SUCCESS';

export class Search implements Action {

	readonly type = SEARCH;

	constructor(public payload: string) {
	}
}

export class SearchSuccess implements Action {

	readonly type = SEARCH_SUCCESS;

	constructor(public payload: Person[]) {
	}
}

export class Select implements Action {

	readonly type = SELECT;

	constructor(public payload: number) {
	}
}

export class SelectSuccess implements Action {

	readonly type = SELECT_SUCCESS;

	constructor(public payload: Person) {
	}
}

export type PersonsActions = Search | SearchSuccess | Select | SelectSuccess;