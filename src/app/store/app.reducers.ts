import {ActionReducerMap} from '@ngrx/store';
import * as fromPersons from '../persons/store/persons.reducers';
import {Person} from '../model/person';

export interface AppState {
	persons: fromPersons.State;
}

export const reducers: ActionReducerMap<AppState> = {
	persons: fromPersons.personsReducer
};

export function selectSearchQuery(state: AppState): string {
	return state.persons.searchQuery;
}

export function selectSearchResults(state: AppState): Person[] {
	return state.persons.searchResults;
}