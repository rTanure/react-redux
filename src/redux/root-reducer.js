// Reducer que armazenará todos os outros reducers
import { combineReducers } from "redux" // Combina todos os reducers

import userReducer from "./User/slice"
import cartReducer from "./Cart/slice"

const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer