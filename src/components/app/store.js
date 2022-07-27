import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../redux/reducers/itemSlice";


const store = configureStore({
    reducer: {
        item: itemSlice
    }
})

export default store;