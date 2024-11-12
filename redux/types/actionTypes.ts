// actionTypes.ts
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_ITEM = 'DELETE_ITEM';
export const INCREMENT_ITEM = 'INCREMENT_ITEM';
export const DECREMENT_ITEM = 'DECREMENT_ITEM';
export const COMPLETE_ORDER = 'COMPLETE_ORDER';
export const RESET_CART = 'RESET_CART';
export const OPEN_MENU = 'OPEN_MENU';
export const CLOSE_MENU = 'CLOSE_MENU';

// Define specific action types for menu actions
export interface OpenMenuAction {
    type: typeof OPEN_MENU;
}

export interface CloseMenuAction {
    type: typeof CLOSE_MENU;
}

// Union type for NavDrawer actions
export type NavDrawerAction = OpenMenuAction | CloseMenuAction;