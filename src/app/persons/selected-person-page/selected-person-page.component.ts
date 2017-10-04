import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {Person} from '../../model/person';
import {PartyService} from '../../services/party.service';
import * as PersonActions from '../store/persons.actions';
import * as fromPersons from '../store/persons.reducers';

@Component({
	selector: 'app-selected-person-page',
	templateUrl: './selected-person-page.component.html',
	styleUrls: ['./selected-person-page.component.less']
})
export class SelectedPersonPageComponent {

	person: Observable<Person>;

	constructor(
		private activatedRoute: ActivatedRoute,
		private partyService: PartyService,
		private store: Store<fromPersons.PersonsFeatureState>) {

		this.activatedRoute
			.params
			.map(params => new PersonActions.Select(+params.id))
			.subscribe(store);

		this.person = store
			.select(fromPersons.selectPersonsFeatureState)
			.select(fromPersons.selectSelectedPerson);
	}

	isPersonInvited(): Observable<boolean> {
		return this.person.map(person => this.partyService.isInvited(person));
	}

	invite(person: Person): void {
		this.partyService.invite(person).subscribe();
	}

	uninvite(person: Person): void {
		this.partyService.uninvite(person).subscribe();
	}
}
