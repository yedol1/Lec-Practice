import { createStore } from "redux";

import favoritesReducer from "./favorites";

const store = createStore(favoritesReducer);

export default store;
