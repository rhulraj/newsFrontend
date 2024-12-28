import { useState } from "react";
import Layout from "../Layout/Layouts";
import CreateNewsPresentation from "./CreateNewsPresentation";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createNews } from "../Redux/Slices/newsSlices";

function CreateNews(){

    const [news, setNews] = useState({
        title : '',
        body1 :'',
        body2: ''
     })
     const [selectedfiles, setFiles] = useState([]);
     const dispatch = useDispatch();
     const isLogged = useSelector(state => state.auth.isLoggedIn)

     function handleUserImage(e){
         const {name, files} =e.target
         setFiles([
             ...selectedfiles,
             files[0]
         ])
     }
 
     function handleUserInput(e){
         const {name, value} = e.target;
         setNews({
             ...news,
             [name] : value
         })
        
     }
 
     async function handleFormSubmit(e){
         e.preventDefault();
         if(!isLogged){
            toast.error("you are not eligible to create posts")
            return
        }
 
         if(!news.title || !news.body1 || !news.body2 ){
             toast.error("Please fill All input")
             return
         }
 
         const formData = new FormData();
 
         for(let key in news){
             if (news.hasOwnProperty(key)){
                let value = news[key];
                 formData.append(key,value)
             }
         }
         selectedfiles.forEach((file)=>{
             formData.append("img", file)
         })
         
         const response = await dispatch(createNews(formData))
        
}
    return(
        <>
            <CreateNewsPresentation handleFormSubmit={handleFormSubmit} handleUserIamge={handleUserImage} handleUserInput={handleUserInput}/>
        </>
    )
}

export default CreateNews

