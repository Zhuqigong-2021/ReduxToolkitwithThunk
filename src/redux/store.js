import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import userReducer from "./user/userSlice";
// const reducer = combineReducers({

// })

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer
  }
});
