import { AppModals, IPageFlashMessage, ModalInput } from "../../interfaces/page";

export enum PageActionTypes {
  SET_FLASH_MESSAGE = 'SET_FLASH_MESSAGE',
  TOGGLE_MODAL = 'TOGGLE_MODAL',
  CLEAR_FLASH_MESSAGE = 'CLEAR_FLASH_MESSAGE'
}

export interface IPageSetFlashMessagePayload {
  flashMessage: IPageFlashMessage;
}

export interface IPageSetFlashMessageAction {
  type: PageActionTypes.SET_FLASH_MESSAGE;
  payload: IPageSetFlashMessagePayload;
}

export interface IPageClearFlashMessageAction {
  type: PageActionTypes.CLEAR_FLASH_MESSAGE;
}

export interface IPageToggleModalPayload {
  active: AppModals | null;
  input?: ModalInput;
}

export interface IPageToggleModalAction {
  type: PageActionTypes.TOGGLE_MODAL;
  payload: IPageToggleModalPayload;
}

export type PageActions = IPageSetFlashMessageAction | IPageToggleModalAction | IPageClearFlashMessageAction;
