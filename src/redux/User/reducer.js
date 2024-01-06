import userActionTypes from "./action-types";

// Definição do estado inicial do reducer
const initialState = {
  currentUser: null,
}

// o reducer recebe um state e uma action
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.LOGIN: 
      return { ...state, currentUser: action.payload}
    case userActionTypes.LOGOUT:
      return { ...state, currentUser: null}
    default:
      return state
  }
}

export default userReducer;