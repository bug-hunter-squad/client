import * as Type from "./type";

const initialState = {
  keyword: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_SEARCH:
      return { ...state,  keyword: payload };
    default:
      return state;
  }
};

export default reducer;
export * from "./type";