import { createStore } from "redux";
import counterReducer from "./components/services/reducers/CounterReducer";

const store = createStore(counterReducer);

export default store;