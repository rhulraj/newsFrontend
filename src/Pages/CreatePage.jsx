import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Layout from "../Layout/Layouts"
import './style.css'

function CreatePage (){

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const admin = useSelector(state => state.auth.admin)
    

    return(
        <Layout>

            <div className="mx-48 my-32 container">
               {isLoggedIn && <Link to={"/admin/createInfo"}><button className="block p-8 text-2xl bg-red-300 rounded-md shadow-md w-96 hover:bg-red-200">Create Info</button></Link> }

               {isLoggedIn && <Link to={'/admin/createNews'}><button className="block p-8 text-2xl bg-red-300 rounded-md shadow-md my-7 w-96 hover:bg-red-200">Create News</button></Link>}

               {admin && <Link to={'/user/createAccount'}> <button className="block p-8 text-2xl bg-red-300 rounded-md shadow-md w-52 hover:bg-red-200">Create User</button></Link>}
            </div>
        </Layout>
    )
}

export default CreatePage