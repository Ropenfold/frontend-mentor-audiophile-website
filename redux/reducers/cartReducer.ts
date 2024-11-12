// Define types for cart items and state
interface CartItem {
  name: string;
  qty: number;
}

interface CartState {
  cart: CartItem[];
  backgroundAndModal: boolean;
}

// Define action types and payloads
type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'DELETE_ITEM'; payload: string }
  | { type: 'INCREMENT_ITEM'; payload: string }
  | { type: 'DECREMENT_ITEM'; payload: string }
  | { type: 'COMPLETE_ORDER' }
  | { type: 'RESET_CART' };

// Set initial state with type
const initialState: CartState = { cart: [], backgroundAndModal: false };

// Reducer function with types
const cartReducer = (state = initialState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item) => action.payload !== item.name),
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.map((item) =>
          action.payload === item.name ? { ...item, qty: item.qty + 1 } : item
        ),
      };
    case 'DECREMENT_ITEM':
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            action.payload === item.name ? { ...item, qty: item.qty - 1 } : item
          )
          .filter((item) => item.qty > 0),
      };
    case 'COMPLETE_ORDER':
      return {
        ...state,
        backgroundAndModal: true,
      };
    case 'RESET_CART':
      return {
        ...state,
        backgroundAndModal: false,
        cart: [],
      };
    default:
      return state;
  }
};


export default cartReducer;
