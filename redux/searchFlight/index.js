import * as Type from "./type";

const initialState = {
  from: null,
  to: null,
  way: null,
  date: null,
  child: null,
  adult: null,
  facilty: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_FROM:
      return { ...state,  from: payload };

    case Type.SET_TO:
      return { ...state,  to: payload };
      
    case Type.SET_WAY:
      return { ...state,  way: payload };

    case Type.SET_DATE:
      return { ...state,  date: payload };

    case Type.SET_CHILD:
      return { ...state,  child: payload };

    case Type.SET_ADULT:
      return { ...state,  adult: payload };

    case Type.SET_FACILITY:
      return { ...state,  facilty: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";