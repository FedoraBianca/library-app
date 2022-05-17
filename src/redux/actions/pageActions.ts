import { IPageSetFlashMessagePayload, IPageToggleModalPayload, PageActionTypes } from "../actionTypes/pageActionTypes";

export const setPageFlashMessage = (payload: IPageSetFlashMessagePayload) => ({
  type: PageActionTypes.SET_FLASH_MESSAGE,
  payload
});

export const clearPageFlashMessage = () => ({ type: PageActionTypes.CLEAR_FLASH_MESSAGE });

export const toggleModal = (payload: IPageToggleModalPayload) => ({
  type: PageActionTypes.TOGGLE_MODAL,
  payload
});
