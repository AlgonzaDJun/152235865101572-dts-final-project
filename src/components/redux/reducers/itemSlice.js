import { createSlice } from '@reduxjs/toolkit';

let addItem = [];

const itemSlice = createSlice({
    name: 'item',
    initialState: addItem,
    reducers: {
        add_Item: (state, action) => {
            return [...state, action.payload]
        },
        del_Item: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        }
    }
})

export const { add_Item, del_Item  } = itemSlice.actions

export const selectItem = state => state.item

export default itemSlice.reducer;