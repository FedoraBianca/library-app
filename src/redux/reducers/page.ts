import { PageActions, PageActionTypes } from '../actionTypes/pageActionTypes';
import initialState from '../initialState';

const page = (state = initialState.page, action: PageActions) => {
  switch (action.type) {
    case PageActionTypes.SET_FLASH_MESSAGE:
      return {
        ...state, ...action.payload
      };

    case PageActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case PageActionTypes.CLEAR_FLASH_MESSAGE:
      return {
        ...state,
        flashMessage: undefined
      };
    default:
      return state;
  }
};

export default page;
