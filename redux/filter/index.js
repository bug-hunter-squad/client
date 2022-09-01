import * as Type from "./type";

const initialState = {
  filter: false,
  wifi: null,
  meal: null,
  luggage: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_FILTER:
      return { ...state,  filter: payload };
    case Type.SET_WIFI:
      return { ...state,  wifi: payload };
    case Type.SET_MEAL:
      return { ...state,  meal: payload };
    case Type.SET_LUGGAGE:
      return { ...state,  luggage: payload };
    
    default:
      return state;
  }
};

export default reducer;
export * from "./type";