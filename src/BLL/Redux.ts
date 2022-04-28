import {applyMiddleware, combineReducers, createStore} from "redux";
import {PhotosReducer} from "./Reducers/PhotosReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    photos: PhotosReducer
})
export type AppRootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunk))

