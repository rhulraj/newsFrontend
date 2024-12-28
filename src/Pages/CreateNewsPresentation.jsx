import Layout from "../Layout/Layouts";
import './style.css'

function CreateNewsPresentation({handleFormSubmit,handleUserInput,handleUserIamge}){

    return(

        <Layout>
             <div className= "container w-5/6 m-auto mt-32 lg:mt-40 ">
                <h1 className="text-lg text-center  font-meduim title-font mb-5 " >Add news</h1>
                <form className="mb-10 px-10" action="">
                        <div className="  ">
                            <label htmlFor="title" className="text-sm leading-7 ">Title<span className="text-red-500">*</span></label>
                            
                            <textarea
                            type="text" 
                            id="title" 
                            name="title"
                            onChange={handleUserInput}
                            minLength={3} 
                            placeholder="title"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required> </textarea>

                        </div>
                       
                        <div className="relative mb-4 ">
                            <label htmlFor="img" className="text-sm leading-7 ">Image1<span className="text-red-500">*</span></label>
                            
                            <input
                            autoComplete="img"
                            type="file" 
                            id="image1" 
                            name="img"
                            required
                            onChange={handleUserIamge}
                            minLength={5} 
                            placeholder="Image"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" />

                        </div>
                        <div className="relative mb-4 ">
                            <label htmlFor="img" className="text-sm leading-7 ">Imgae2<span className="text-red-500">*</span></label>
                            
                            <input
                            autoComplete="img"
                            type="file" 
                            id="Image2" 
                            name="img"
                            required
                            onChange={handleUserIamge}
                            minLength={5} 
                            placeholder="Image"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" />

                        </div>
                        <div className="relative mb-4 ">
                            <label htmlFor="img" className="text-sm leading-7 ">Image3<span className="text-red-500">*</span></label>
                            
                            <input
                            autoComplete="img"
                            type="file" 
                            id="Image3" 
                            name="img"
                            required
                            onChange={handleUserIamge}
                            minLength={5} 
                            placeholder="Image"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" />

                        </div>
                        <div className="  ">
                            <label htmlFor="body1" className="text-sm leading-7 ">Content part 1<span className="text-red-500">*</span></label>
                            
                            <textarea
                            type="text" 
                            id="description" 
                            name="body1"
                            onChange={handleUserInput}
                            
                            placeholder="description"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required> </textarea>

                        </div>
                        <div className="  ">
                            <label htmlFor="body2" className="text-sm leading-7 ">Content part 2<span className="text-red-500">*</span></label>
                            
                            <textarea
                            type="text" 
                            id="description" 
                            name="body2"
                            onChange={handleUserInput}
                            
                            placeholder="description"
                            className="w-full px-3 py-1 mt-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out border border-gray-300 rounded outline-noe focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200" required> </textarea>

                        </div>
                        <div className="w-3/6" >
                            <label htmlFor="Type" className="text-sm leading-7">Type<span className="text-red-500">*</span></label>
                            <select onChange={handleUserInput} id="cars" name="type" className="mb-9 mt-3 block">
                                <option value="LATEST">Latest</option>
                                <option value="TOP">Top</option>
                                <option value="INTERNATIONAL">International</option>
                                <option value="SPORTS">Sports</option>
                            </select>
                        </div>
                      
                      
                        <button onClick={handleFormSubmit}
                         className="w-full px-8 py-2 text-lg  bg-yellow-500 border-0 rounded focus:outline-none hover:bg-yellow-600">
                            Create Account
                        </button>
                        
                    </form>
                </div>
        </Layout>
    )
}
export default CreateNewsPresentation;