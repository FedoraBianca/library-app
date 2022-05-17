import { AnyAction, CombinedState, combineReducers } from "redux";
import { IState } from "../../interfaces/state";
import books from "./books";
import page from "./page";

const appReducer = combineReducers<IState>({
    page,
    books
});

const rootReducer = (state: CombinedState<IState> | undefined, action: AnyAction) => {
    return appReducer(state, action);
}

export default rootReducer;