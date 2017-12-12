import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule, combineReducers, ActionReducer } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { storeFreeze } from 'ngrx-store-freeze'
import {compose} from '@ngrx/core/compose'
import {createSelector} from 'reselect'

import * as fromQuote from './quote.reducer';

import { environment } from '../../environments/environment';

// export interface State {
//          quote:fromQuote.State;
// };
export interface State {
    // auth: Auth;
    quote: fromQuote.State;
    // projects: fromProjects.State;
    // taskLists: fromTaskLists.State;
    // tasks: fromTasks.State;
    // users: fromUsers.State;
    // theme: fromTheme.State;
    // router: fromRouter.RouterState;
  }

const initialState = {
        quote:fromQuote.initialState
};

const reducers = {
    quote:fromQuote.reducer
}

// const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const developmentReducer: ActionReducer<State> = combineReducers(reducers);

const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state = initialState, action: any ): State {
    return environment.production ? productionReducer(state,action) : developmentReducer(state,action)
}

export const getQuoteState = (state:State)=>state.quote

export const getQuote= createSelector(getQuoteState,fromQuote.getQuote)

@NgModule({
    imports: [
        StoreModule.provideStore(reducers),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ],
})
export class AppStoreModule {}