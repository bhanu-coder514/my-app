import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState:{  // {id,title,description,brand,price,image,quantity}
        items:[],
    },

    reducers: {
        additem: (state,action) => {

            const existing = state.items.find(item => item.id === action.payload.id)

            if(existing){
                existing.quantity += 1;
            }
            else{
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeItem: (state,action) => {
            state.items = state.items.filter(
                (item) => item.id != action.payload
            )
        },
        increaseQuantity: (state,action) =>{
            const item = state.items.find(item => item.id === action.payload);

            if(item){
                item.quantity += 1;
            }
        },
        decreaseQuantity: (state,action) => {
            const item = state.items.find(item => item.id === action.payload);

            if(item){
                if(item.quantity > 1){
                    item.quantity -= 1;
                }
                else{
                    // remove item 
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
        }
    }
})


export const {additem,removeItem,increaseQuantity,decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;