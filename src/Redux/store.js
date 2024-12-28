import {configureStore} from '@reduxjs/toolkit';
import infoSlice from "./Slices/inforSlices";
import newsSlices from './Slices/newsSlices';
import userSlices from './Slices/userSlice';
import authSlices from './Slices/authSlice'

export const store = configureStore({
    reducer:{
        info : infoSlice ,
        news : newsSlices,
        user : userSlices,
        auth : authSlices
        
    },
    devTools: true,
})