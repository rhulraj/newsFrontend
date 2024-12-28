import { useState } from "react";
import Layout from "../../Layout/Layouts";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccount, removeDetails, verifyOtp } from "../../Redux/Slices/userSlice";

function VerifyOtp(){
     
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userData = useSelector(state => state.user.data)
    
    const [data, setData] = useState({
        email : userData.email,
        otp :''
    }) 

    function handleUserInput(e){
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        if(!data.otp){
            toast.error("please enter Otp")
        }
        console.log(data)
        const response = await dispatch(verifyOtp(data));
        console.log(response)

        if(response.payload?.data?.success){
            
            const apiResponse = await dispatch(createAccount(userData));
           await dispatch(removeDetails())
            navigate('/auth/login')
        }

    }


    return(
        <Layout>
            <div className= "w-5/6 m-auto mt-32 lg:mt-40">
                <h1 className="text-lg text-center  font-meduim title-font mb-5 " >OTP sent successfully to your email. Please enter the OTP you received to proceed.</h1>
                <form className="mb-10" action="">
                        <div className=" flex justify-between ">
                            
                            <label htmlFor="otp" className="text-sm leading-7 ">OTP<span className="text-red-500">*</span></label>
                            
                            <input
                            type="text" 
                            id="otp" 
                            name="otp"
                            onChange={handleUserInput}
                            minLength={3} 
                            placeholder="otp"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required/>
                        </div>
                        <button onClick={handleFormSubmit}
                         className=" px-8 py-2 text-lg  bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600 mt-8 w-1/2 ml-32">
                            Verify
                        </button>
                    </form>
            </div>
                        
        </Layout>
    )
}

export default VerifyOtp