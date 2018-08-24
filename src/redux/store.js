import { createStore, applyMiddleware } from "redux";
import AppReducer from "./../reducers";
import { middleware } from "./../navigators/AppNavigator";
import { createLogger } from "redux-logger";

const logger = createLogger();

export default createStore(AppReducer, applyMiddleware(logger, middleware));
