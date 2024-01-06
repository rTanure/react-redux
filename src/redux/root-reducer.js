// Reducer que armazenará todos os outros reducers
import { combineReducers } from "redux" // Combina todos os reducers

import userReducer from "./User/reducer"

const rootReducer = combineReducers({
  userReducer
})

export default rootReducer