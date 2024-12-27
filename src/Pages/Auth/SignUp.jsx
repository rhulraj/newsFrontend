import { useState } from "react"
import Layout from "../../Layout/Layouts"

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDetails, sendOtp } from "../../Redux/Slices/userSlice";
import SignUpPresentaion from "./SignUpPresentation";

function SignUp(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password: ''
    })

    function handleUserInput (e){
         const {name, value} = e.target;
         setData({
            ...data,
            [name] : value
         })
    }

    async function handleFormSubmit(e){
       e.preventDefault();
       if(!firstName || !lastName || !email || !password){
        toast.error("please fill all input")
           return 
       }
       if(data.password.length < 6 ){
        toast.error("password should more than 5 character")
        return
       }
       if(!data.email.includes('@') || !data.email.includes(".")){
        toast.error("Invalid email address")
        return
       }
       dispatch(addDetails(data)); //store data in redux store
       const apiResponse = await dispatch(sendOtp(data));
       if(apiResponse.payload.data.success){
        navigate('/user/verifyOtp')
       }
    }

    return(
        <Layout>
            <SignUpPresentaion handleFormSubmit={handleFormSubmit} handleUserInput={handleUserInput}/>
        </Layout>
    )
}

export default SignUp