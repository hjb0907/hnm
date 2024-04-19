import { createStore , applyMiddleware} from "redux";
import { thunk } from 'redux-thunk'; // 변경된 부분
import rootReducer from './reducers/index'

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
