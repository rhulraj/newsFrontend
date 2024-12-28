import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import toast from 'react-hot-toast'
import axiosInstanse from "../../Helper/axiosInstance";


const initialState = {
    latest: [],
    top: [],
    international : [],
    data: ''
}

export const createNews = createAsyncThunk("/createNews" , async(data)=>{
    try{
    const response = axiosInstanse.post('/news/add', data, {
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

export const fetchLatestNews = createAsyncThunk('/fetchlatest', async()=>{
    try{
      const response =  axiosInstanse.get("/news/latest");
    const apiResponse = await response
    return apiResponse
    }catch(error){
        console.log(error)
    }
});

export const fetchInternationalNews = createAsyncThunk('/fetchinternational', async()=>{
    try{
      const response =  axiosInstanse.get("/news/international");
    const apiResponse = await response
    return apiResponse
    }catch(error){
        console.log(error)
    }
});


export const fetchTopNews = createAsyncThunk('/fetchtop', async()=>{
    try{
      const response =  axiosInstanse.get("/news/top");
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

export const newsFetchById = createAsyncThunk('/news/:id', async(id)=>{
    try{
    const response = axiosInstanse.get(`/news/${id}`)
    
    const apiResponse = await response
    return apiResponse
    }catch(error){
        console.log(error)
    }
})


const NewsSlices = createSlice({
    name: "information",
    initialState,
    reducers:{},
    extraReducers : (builder)=>{
        builder.addCase(fetchLatestNews.fulfilled, (state, action)=>{
            state.latest = action?.payload?.data?.data
        })

        builder.addCase(fetchTopNews.fulfilled,(state, action)=>{
            state.top = action?.payload?.data?.data
        })

        builder.addCase(fetchInternationalNews.fulfilled,(state, action)=>{
            state.international = action?.payload?.data?.data
        })

        builder.addCase(newsFetchById.fulfilled,(state, action)=>{
            state.data = action?.payload?.data?.data
        })
    }
});


export default NewsSlices.reducer;
