import { NavDrawerAction } from "../types/actionTypes";

interface MenuState {
  openMenu: boolean;
  background: boolean;
}

type MenuAction = NavDrawerAction;

const initialState: MenuState = { openMenu:false, background: false };

const menuReducer = (state = initialState, action: MenuAction): MenuState => {
  console.log('action in menuReducer', action);
  switch (action.type) {
    case 'OPEN_MENU':
      return {
        ...state,
        openMenu: true,
        background: true
      };
      case 'CLOSE_MENU':
      return {
        ...state,
        openMenu: false,
        background: false
      };
    default:
      return state;
  }
};

export default menuReducer;
