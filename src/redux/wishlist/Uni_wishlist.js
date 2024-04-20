import { createSlice } from "@reduxjs/toolkit";


export const University_Slice=createSlice({
    name: 'Uni_wishlist',
    initialState: [],
    reducers:{
        Add_University(state, action){
            state.push(action.payload)
        }
    }
})

export const {Add_University}=University_Slice.actions
export default University_Slice.reducer