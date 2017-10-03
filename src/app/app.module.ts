import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {environment} from '../environments/environment';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {LayoutComponent} from './layout/layout.component';
import {PersonsEffects} from './persons/store/persons.effects';
import {InMemoryService} from './services/in-memory.service';
import {PartyService} from './services/party.service';
import {PersonService} from './services/person.service';
import {reducers} from './store/app.reducers';

@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		RouterModule.forRoot(appRoutes),
		HttpClientInMemoryWebApiModule.forRoot(
			InMemoryService,
			{delay: 500, dataEncapsulation: false}
		),
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot([PersonsEffects]),
		StoreRouterConnectingModule,
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	providers: [
		PersonService,
		PartyService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
