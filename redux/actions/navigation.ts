import { OPEN_MENU, CLOSE_MENU, NavDrawerAction } from '../types/actionTypes';

export const openCloseDrawer = (drawerState: boolean): NavDrawerAction => {
    console.log('in OpenCloseDrawer');
    
    if (!drawerState) {
        return {
            type: OPEN_MENU,
        };
    } else {
        return {
            type: CLOSE_MENU,
        };
    }
};
