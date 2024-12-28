import { useDispatch, useSelector } from "react-redux";
import CreateInfoPresentation from "./CreateInfoPresentation";
import { createInfo } from "../Redux/Slices/inforSlices";
import { useState } from "react";
import toast from 'react-hot-toast'

function CreateInfo(){

    const [info, setInfo] = useState({
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

    function haldleUserInput(e){
        const {name, value} = e.target;
        setInfo({
            ...info,
            [name] : value
        })
       
    }

    async function handleFormSubmit(e){
        e.preventDefault();
        if(!isLogged){
            toast.error("you are not eligible to create posts")
            return
        }
        if(!info.title || !info.body1 || !info.body2){
            toast.error("Please fill All input")
            return
        }

        const formData = new FormData();

        for(let key in info){
            if (info.hasOwnProperty(key)){
               let value = info[key];
                formData.append(key,value)
            }
        }
        selectedfiles.forEach((file)=>{
            formData.append("img", file)
        })

        

        const response = await dispatch(createInfo(formData));
    }

    return(
        <>
        <CreateInfoPresentation handleFormSubmit={handleFormSubmit} handleUserIamge={handleUserImage} handleUserInput={haldleUserInput}/>
        </>
    )
};

export default CreateInfo;

