
import { createStore } from "redux";

// Initial state
const initialState = {
  data: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
