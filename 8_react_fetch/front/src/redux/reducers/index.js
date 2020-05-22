import { combineReducers } from "redux";

import checkPositions from "./checkPositions";
import auth from "./auth";
import notification from "./notification";

export default combineReducers({ checkPositions, auth, notification });
