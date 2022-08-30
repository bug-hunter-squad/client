import * as Type from "./type";

const initialState = {
  buttonFlight: null,
  buttonAirline: null,
  addFlight: null,
  addAirline: null,
  addCountry: null,
  buttonCountry: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_BTN_FLIGHT:
      return { ...state,  buttonFlight: payload };

    case Type.SET_BTN_AIRLINE:
      return { ...state,  buttonAirline: payload };

      case Type.ADD_FLIGHT:
        return { ...state,  addFlight: payload };

      case Type.ADD_AIRLINE:
        return { ...state,  addAirline: payload };

      case Type.SET_BTN_COUNTRY:
        return { ...state,  buttonCountry: payload };

      case Type.ADD_COUNTRY:
        return { ...state,  addCountry: payload };



    default:
      return state;
  }
};

export default reducer;
export * from "./type";