import {Injectable} from '@angular/core';
import {
	Actions,
	Effect
} from '@ngrx/effects';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../model/person';
import {PersonService} from '../../services/person.service';
import * as PersonsActions from './persons.actions';

@Injectable()
export class PersonsEffects {

	@Effect()
	search: Observable<PersonsActions.SearchSuccess> = this.actions.ofType(PersonsActions.SEARCH)
		.map((action: PersonsActions.Search) => action.payload)
		.switchMap(searchQuery => {
			if (_.isEmpty(searchQuery)) {
				return Observable.of([]);
			}
			return this.personsService.searchPersons(searchQuery);
		})
		.map((searchResults: Person[]) => new PersonsActions.SearchSuccess(searchResults));

	@Effect()
	select: Observable<PersonsActions.SelectSuccess> = this.actions.ofType(PersonsActions.SELECT)
		.map((action: PersonsActions.Select) => action.payload)
		.switchMap(personId => this.personsService.getPerson(personId))
		.map(person => new PersonsActions.SelectSuccess(person));

	constructor(
		private actions: Actions,
		private personsService: PersonService) {
	}
}