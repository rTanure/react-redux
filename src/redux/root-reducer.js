// Reducer que armazenará todos os outros reducers
import { combineReducers } from "redux" // Combina todos os reducers

import userReducer from "./User/reducer"
import cartReducer from "./Cart/reducer"

const rootReducer = combineReducers({
  userReducer,
  cartReducer
})

export default rootReducer