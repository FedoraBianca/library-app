import { AnyAction, CombinedState, combineReducers } from "redux";
import { IState } from "../../interfaces/state";
import users from "./users";

const appReducer = combineReducers<IState>({
    users
});

const rootReducer = (state: CombinedState<IState> | undefined, action: AnyAction) => {
    return appReducer(state, action);
}

export default rootReducer;