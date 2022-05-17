import { IState } from "../interfaces/state";

const initialState: IState = {
    page: {
        modal: { active: null }
    },
    books: {
        list: [],
        activeOrders: [],
        loading: false
    }
};

export default initialState;