import { combineReducers} from "@reduxjs/toolkit";
import menuReducer from "./menuReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
    menu: menuReducer,
    cart: cartReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;