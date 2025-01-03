import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Left from '../assets/LeftArrow.png'
import Right from '../assets/RightArrow.png'
import Layout from "../Layout/Layouts";
import './style.css'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import logo from '../assets/logo.svg'
import { fetchById } from "../Redux/Slices/inforSlices";

function Info(){

    const [initial, setIntial] = useState(0);
    const [end, setEnd] = useState(20);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const info = useSelector((state) => state.info)
     const data =info.infoState && info.infoState.slice(initial, end);

     function next(){
        setEnd( end + 20 );
        setIntial( initial + 20 );
        setPage(page + 1)
     }

     async function handleFetchId(id){
            navigate(`/infos/${id}`)
            await dispatch(fetchById(id))
        }

     function previous(){
        setEnd( end - 2 );
        setIntial( initial - 2 );
        setPage(page - 1)
     }

    return(<Layout>
      <div className="container font-serif shadow-lg p-2 mx-2">
         <Helmet>
            <title>Vedic facts</title>
            <meta property="og:title" content="Vedic Fact" />
            <meta property="og:description" content=""/>
            <meta property="og:image" content={logo}/>
            <meta property="og:url" content=""/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="My Awesome Page" />
            <meta name="twitter:description" content="This is an amazing page that does awesome things." />
            <meta name="twitter:image" content={logo} />
         </Helmet>
        
         <h1 className="text-center ">Vedic Facts</h1>
         {data && data.map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id} onClick={()=>{handleFetchId(el?._id)}}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
      </div>
      <div className=" text-center">
        {initial > 1 && <button className="w-8 mr-3 mt-3" onClick={previous}><img className="" src={Left} alt="" /></button>}

        <button className="text-xl" >{page}</button>

       {end < info.infoState && info.infoState.length && <button className="w-8 ml-3 " onClick={next}><img className=" " src={Right} alt="" /></button>}
       </div>
    </Layout>)
}

export default Info