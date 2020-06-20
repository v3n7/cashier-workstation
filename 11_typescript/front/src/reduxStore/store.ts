import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__?: () => any; }
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
