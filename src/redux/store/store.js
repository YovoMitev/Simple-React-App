import { createStore } from "redux";
import { loadState, saveState } from "../../helpers/persistState/persistState";
import rootReducers from "../reducers/rootReducer";

const persistState = loadState();
const store = createStore(rootReducers, persistState);
store.subscribe(()=>{
    saveState(
        {
            user: store.getState().user
        }
    );
});

export default store;