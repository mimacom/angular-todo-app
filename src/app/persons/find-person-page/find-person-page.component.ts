import {
	ChangeDetectionStrategy,
	Component
} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../model/person';
import * as PersonActions from '../store/persons.actions';
import * as fromPersons from '../store/persons.reducers';

@Component({
	selector: 'find-person-page',
	templateUrl: './find-person-page.component.html',
	styleUrls: ['./find-person-page.component.less'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindPersonPageComponent {

	searchQuery: Observable<string>;
	persons: Observable<Person[]>;

	constructor(private store: Store<fromPersons.PersonsFeatureState>) {

		this.searchQuery = store
			.select(fromPersons.selectPersonsFeatureState)
			.select(fromPersons.selectSearchQuery);

		this.persons = store
			.select(fromPersons.selectPersonsFeatureState)
			.select(fromPersons.selectSearchResults);
	}

	search(query: string): void {
		this.store.dispatch(new PersonActions.Search(query));
	}
}
