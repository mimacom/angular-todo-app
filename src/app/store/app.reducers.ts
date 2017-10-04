import {
	Params,
	RouterStateSnapshot
} from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import {RouterStateSerializer} from '@ngrx/router-store';
import {ActionReducerMap} from '@ngrx/store';

export interface RouterStateUrl {
	url: string;
	pathParams: Params;
}

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {

	serialize(routerState: RouterStateSnapshot): RouterStateUrl {
		const {url} = routerState;
		const pathParams = routerState.root.children[0].children[0].params;

		return {url, pathParams};
	}
}

export interface AppState {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<AppState> = {
	routerReducer: fromRouter.routerReducer
};