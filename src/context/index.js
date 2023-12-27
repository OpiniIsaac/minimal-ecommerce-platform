import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./carSlice";

const store = configureStore({
     reducer:{
          cart: carSlice.reducer
     }
})

export default store