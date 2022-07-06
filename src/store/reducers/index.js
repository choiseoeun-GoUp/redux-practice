// action 객체의 type값에 따라 상태를 변경시키자
// 여러개의 reducer을 사용하는 경우 combineReducer메서드를 사용해서 하나의 reducer로 합쳐줄 수있다.

import { combineReducers } from "redux";
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
  itemReducer,
});

export default rootReducer;
