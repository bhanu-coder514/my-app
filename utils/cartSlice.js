import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{  // {id,title,description,brand,price,image}
        items:[],
    },

    reducers: {
        additem: (state,action) => {
            state.items.push(action.payload);
        },
        removeItem: (state,action) => {
            state.items = state.items.filter(
                (item) => item.id != action.payload
            )
        }
    }
})


export const {additem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;