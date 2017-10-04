import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {FindPersonPageComponent} from './find-person-page/find-person-page.component';
import {PersonOverviewListComponent} from './find-person-page/person-overview-list/person-overview-list.component';
import {PersonOverviewComponent} from './find-person-page/person-overview-list/person-overview/person-overview.component';
import {PersonSearchComponent} from './find-person-page/person-search/person-search.component';
import {personsRoutes} from './persons.routes';
import {PersonDetailComponent} from './selected-person-page/person-detail/person-detail.component';
import {SelectedPersonPageComponent} from './selected-person-page/selected-person-page.component';
import {PersonsEffects} from './store/persons.effects';
import * as fromPersons from './store/persons.reducers';

@NgModule({
	declarations: [
		FindPersonPageComponent,
		PersonSearchComponent,
		PersonOverviewListComponent,
		PersonOverviewComponent,
		SelectedPersonPageComponent,
		PersonDetailComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(personsRoutes),
		StoreModule.forFeature('personsFeature', fromPersons.personsReducer),
		EffectsModule.forFeature([PersonsEffects])
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class PersonsModule {
}
