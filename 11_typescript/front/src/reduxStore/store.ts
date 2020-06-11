import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./reducers";
import thunk from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window["__REDUX_DEVTOOLS_EXTENSION__"] &&
      window["__REDUX_DEVTOOLS_EXTENSION__"]()
  )
);

export default store;
