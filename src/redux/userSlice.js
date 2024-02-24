import {createSlice} from "@reduxjs/toolkit"

//const user = JSON.parse(localStorage.getItem("user"))
   const user = JSON.parse(localStorage.getItem("user"))
 const initialState = {
    currentUser : user ? user : null,
     isFetching: false,
     error: false,
}

 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) =>{
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logout: (state) => {
          state.currentUser = null;
        },
        registerStart: (state) =>{
            state.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        registerFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        


    }
})

export const {loginStart, loginSuccess, loginFailure, logout, registerStart, registerSuccess, registerFailure} = userSlice.actions;

export default userSlice.reducer