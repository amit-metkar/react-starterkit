import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { createSelector } from "reselect";
import getOr from "lodash/fp/getOr";

//Action types
export const APP_INITIALIZE = "App.Initialize";
export const APP_SET_READY = "App.Set.Ready";

//Action
export const appInitialize = () => ({ type: APP_INITIALIZE });
export const appSetReady = () => ({ type: APP_SET_READY });

export const epics = {
  appInit: (action$, state$) =>
    action$.ofType(APP_INITIALIZE).pipe(
      switchMap((action) => {
        if (action.type === APP_INITIALIZE) {
          // TODO: Do Something
        }
        return of(appSetReady());
      })
    ),
};

// Initial state
export const initialState = {
  isAppReady: false,
};

// Selectors
const app = (state) => state.app;
export const selectAppReady = createSelector(app, (state) => getOr(initialState, "isAppReady", state));

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case APP_SET_READY:
      return {
        ...state,
        isAppReady: true,
      };

    default:
      return state;
  }
};
