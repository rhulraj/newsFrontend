import { useState } from 'react'
import Layout from '../../Layout/Layouts'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { login } from '../../Redux/Slices/authSlice'
import { useNavigate } from 'react-router-dom'

function Login (){
    const [userData, setUserData] = useState({
        email: "",
        password : ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleUserInput(e){
        const {name ,value} = e.target;

        setUserData({
            ...userData,
            [name] : value
        })
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        if(!userData.email || !userData.password){
            toast.error("Please fill all Input")
        }
        if(!userData.email.includes('@') || !userData.email.includes(".")){
            toast.error("Invalid email address")
            return
           }
          
           const apiResponse = await dispatch(login(userData))
           if(apiResponse?.payload?.data?.success){
            navigate("/")
           }
           
    }

    return (
        <Layout>
            <div className= "w-5/6 m-auto mt-32 lg:mt-40">
                <h1 className="text-lg text-center  font-meduim title-font mb-5 " >Create your Account</h1>
                <form className="mb-10" action="">
                <div>
                            <label htmlFor="email" className="text-sm leading-7 ">Email<span className="text-red-500">*</span></label>
                            
                            <input
                            type="text" 
                            id="email" 
                            name="email"
                            onChange={handleUserInput}
                            minLength={3} 
                            placeholder="abc@gmail.com"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required/>
                          </div>
                          <div>
                            <label htmlFor="password" className="text-sm leading-7 ">Password<span className="text-red-500">*</span></label>
                            
                            <input
                            type="password" 
                            id="password" 
                            name="password"
                            onChange={handleUserInput}
                            minLength={3} 
                            placeholder="password"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required/>
                          </div>
                      
                      
                        <button onClick={handleFormSubmit}
                         className=" px-8 py-2 text-lg  bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600 mt-8 w-1/2 ml-32">
                            Log In
                        </button>
                        
                    </form>
                </div>
        </Layout>
    )

}

export default Login