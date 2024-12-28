import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstanse from "../../Helper/AxiosInstance"
import toast from "react-hot-toast"


const initialState = {
    data : ""
}

export const sendOtp = createAsyncThunk('/user/sendOtp', async(data)=>{
   const response = axiosInstanse.post('/users/sendOtp', data)

     toast.promise(response,{
        success: (resolvePromise)=>{
            return resolvePromise?.data?.message
        },
        loading : "Holding back tight, we are sending otp...." ,
        error : "Oh no! something went wrong. please try again"
     })
     const apiResponse = await response
    return apiResponse
})

export const verifyOtp = createAsyncThunk('/users/verifyOtp', async(data)=>{
    const response = axiosInstanse.post('users/verify', data)
    toast.promise(response, {
        success: (resolvePromise)=>{
            return resolvePromise?.data?.message
        },
        loading : "hold back tight, otp verification is in process",
        error: "Oh no! something went wrong. please try again"
    })

    const apiResponse = await response;
    return apiResponse
})

export const createAccount = createAsyncThunk('users/createUser', async(data)=>{
    const response = axiosInstanse.post('users/createUser',data)
    toast.promise(response,{
        success : (resolvePromise)=>{
            return resolvePromise?.data?.message
        } ,
        loading : 'hold back tight, we are creating your acccount',
        error: "Oh no! something went wrong. please try again"
    })

    const apiResponse = await response;
    return apiResponse;
})

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers :{
        addDetails : (state, action)=>{
            state.data = action.payload
        },
        removeDetails : (state, action) =>{
            state.data = {}
        }
    }
})

export const {addDetails, removeDetails} = userSlice.actions

export default userSlice.reducer