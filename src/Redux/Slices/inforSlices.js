import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import toast from 'react-hot-toast'
import axiosInstanse from "../../Helper/AxiosInstance";


const initialState = {
    infoState: [],
    data: ''
}

export const createInfo = createAsyncThunk("/createInfo" , async(data)=>{
    try{
    const response = axiosInstanse.post('/infos/add', data, {
        headers:{
            'Content-Type': 'multipart/form-data', // Important for file uploads
        }
    })
    toast.promise(response,{
        success: (resolvePromise)=>{
            return resolvePromise?.data?.message
        },
        loading: 'Hold back tight, we are creating  the information...',
        error: "ohh No! Something went wrong . please try again"
    })
    const apiResponse = await response
    return apiResponse
     }catch(error){
        console.log(error)
     }
});

export const fetchAllInfo = createAsyncThunk('/fetchInfo', async()=>{
    try{
      const response =  axiosInstanse.get("/infos");
    const apiResponse = await response
    return apiResponse
    }catch(error){
        console.log(error)
    }
});

export const deleteById = createAsyncThunk('infos/delte/:id', async(id)=>{
    try{
    const response =  axiosInstanse.delete(`/infos/delete/${id}`);
    toast.promise(response,{
        success: (resolvePromise)=>{
            return resolvePromise?.data?.message
        },
        loading: 'Hold back tight, we are deleting the information...',
        error: "ohh No! Something went wrong . please try again"
    })
    const apiResponse = await response;
   }catch(error){
    console.log(error)
   }
    
});

export const fetchById = createAsyncThunk('/infos/:id', async(id)=>{
    try{
    const response = axiosInstanse.get(`/infos/${id}`)
    
    const apiResponse = await response
    return apiResponse
    }catch(error){
        console.log(error)
    }
})


const InfoSlices = createSlice({
    name: "information",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(fetchAllInfo.fulfilled, (state, action)=>{
            state.infoState = action?.payload?.data?.data
        })
        builder.addCase(fetchById.fulfilled,(state, action)=>{
            state.data = action?.payload?.data?.data
        })
    }
});


export default InfoSlices.reducer;

