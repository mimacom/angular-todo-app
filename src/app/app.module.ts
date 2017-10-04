import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {LayoutComponent} from './layout/layout.component';
import {InMemoryService} from './services/in-memory.service';
import {PartyService} from './services/party.service';
import {PersonService} from './services/person.service';
import * as fromApp from './store/app.reducers';

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
		StoreModule.forRoot(fromApp.reducers),
		EffectsModule.forRoot([])
	],
	providers: [
		PersonService,
		PartyService
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
