import { AnyAction, CombinedState, combineReducers } from "redux";
import { IState } from "../../interfaces/state";

const appReducer = combineReducers<IState>({
    users
});

const rootReducer = (state: CombinedState<IState> | undefined, action: AnyAction) => {
    return appReducer(state, action);
}

export default rootReducer;