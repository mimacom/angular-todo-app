import {Person} from '../../model/person';
import * as PersonsActions from './persons.actions';

export interface PersonsFeatureState {
	persons: State;
}

export interface State {
	searchQuery: string;
	searchResults: Person[];
}

const initialState: State = {
	searchQuery: '',
	searchResults: []
};

export function personsReducer(
	state = initialState,
	action: PersonsActions.PersonsActions) {

	switch (action.type) {

		case PersonsActions.SEARCH:
			return {
				...state,
				searchQuery: action.payload
			};
		case PersonsActions.SEARCH_SUCCESS:
			return {
				...state,
				searchResults: action.payload
			};
		default:
			return state;
	}
}

export function selectSearchQuery(state: State): string {
	return state.searchQuery;
}

export function selectSearchResults(state: State): Person[] {
	return state.searchResults;
}
