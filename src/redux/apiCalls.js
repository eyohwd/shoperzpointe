import {loginStart, loginFailure, loginSuccess, registerStart, registerSuccess, registerFailure } from "../redux/userSlice"
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
   dispatch(loginStart());
   try {
    const res = await publicRequest.post("/auth/login", user)
    dispatch(loginSuccess(res.data))
    if(res.data){
       localStorage.setItem("user", JSON.stringify(res.data))
    }
   } catch (error) {
    dispatch(loginFailure())
   }
}

export const register = async (dispatch, user) => {
   dispatch(registerStart());
   try {
    const res = await publicRequest.post("/auth/register", user)
    dispatch(registerSuccess(res.data))
    if(res.data){
       localStorage.setItem("user", JSON.stringify(res.data))
    }
   } catch (error) {
    dispatch(registerFailure())
   }
}


