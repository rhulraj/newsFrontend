import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layouts";
import './style.css'
import logo from '../assets/logo.svg'
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { newsFetchById } from "../Redux/Slices/newsSlices";

function InternationalNews(){


    
    const [initial, setIntial] = useState(0);
    const [end, setEnd] = useState(20);
    const [page, setPage] = useState(1)
    const dispatch = useDispatch();
    const navigate = useNavigate();

     const news = useSelector((state) => state.news)
     const data = news.international.slice(initial, end);

     async function handleNewsFetchId(id){
           navigate(`/news/${id}`)
           await dispatch(newsFetchById(id))
        }

     function next(){
        setEnd( end + 20 );
        setIntial( initial + 20 );
        setPage(page + 1)
     }
     function previous(){
        setEnd( end - 20 );
        setIntial( initial - 20 );
        setPage(page - 1)
     }

    return(<Layout>
      <div className="container font-serif shadow-lg p-2 mx-2">
      <Helmet>
            <title>Vedic facts</title>
            <meta property="og:title" content="Vedic Fact" />
            <meta property="og:description" content=""/>
            <meta property="og:image" content={logo}/>
            <meta property="og:url" content="https://vedicinfos.in/news/international"/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="My Awesome Page" />
            <meta name="twitter:description" content="This is an amazing page that does awesome things." />
            <meta name="twitter:image" content={logo} />
         </Helmet>
         <h1 className="text-center ">INTERNATIONAL NEWS</h1>
         {data.map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id} onClick={()=>{handleNewsFetchId(el?._id)}}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
      </div>
      <div className=" text-center">
        {initial > 1 && <button className="w-8 mr-3 mt-3" onClick={previous}><img className="" src={Left} alt="" /></button>}

        <button className="text-xl" >{page}</button>

       {end < data.length && <button className="w-8 ml-3 " onClick={next}><img className=" " src={Right} alt="" /></button>}
       </div>
        </Layout>
    )
}

export default InternationalNews;