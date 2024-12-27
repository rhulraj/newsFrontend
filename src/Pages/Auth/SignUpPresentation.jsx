
function SignUpPresentaion({handleUserInput,handleFormSubmit}){

    return(
        <>
        <div className= "w-5/6 m-auto mt-32 lg:mt-40">
                <h1 className="text-lg text-center  font-meduim title-font mb-5 " >Create your Account</h1>
                <form className="mb-10" action="">
                        <div className=" flex justify-between ">
                            <div>
                            <label htmlFor="firstName" className="text-sm leading-7 ">First Name<span className="text-red-500">*</span></label>
                            
                            <input
                            type="text" 
                            id="firstName" 
                            name="firstName"
                            onChange={handleUserInput}
                            minLength={3} 
                            placeholder="Rahul"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required/>
                            </div>

                          <div>
                            <label htmlFor="lastName" className="text-sm leading-7 ">Last Name<span className="text-red-500">*</span></label>
                            
                            <input
                            type="text" 
                            id="lastName" 
                            name="lastName"
                            onChange={handleUserInput}
                            minLength={3} 
                            placeholder="kumar"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required/>
                          </div>

                        </div>
                       
                        
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
                            Create Account
                        </button>
                        
                    </form>
                </div>
        </>
    )
}

export default SignUpPresentaion