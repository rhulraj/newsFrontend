import { useParams } from "react-router-dom"
import Layout from "../Layout/Layouts"
import { useDispatch, useSelector } from "react-redux";
import { newsFetchById } from "../Redux/Slices/newsSlices";
import { useEffect } from "react";
import './style.css'
import './page.css'

function NewsPage(){



    const {id} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(state => state.news.data)

    async function fetchData (){
       const response = await dispatch(newsFetchById(id))
       console.log(response)
    }
    console.log(data)
    useEffect(()=>{
       fetchData()
    },[])
    return (
        <Layout>
            <div className="container text-black mx-10 mt-10 ">
            <Helmet>
            <title>Vedic facts</title>
            <meta property="og:title" content="Vedic Fact" />
            <meta property="og:description" content=""/>
            <meta property="og:image" content={data.image1}/>
            <meta property="og:url" content=""/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="My Awesome Page" />
            <meta name="twitter:description" content="This is an amazing page that does awesome things." />
            <meta name="twitter:image" content={data.image1} />
         </Helmet>
               {data.title && <h1 className="page">{data.title}</h1> }
                {data.image1 && <img src={data.image1} alt="" className="mx-auto my-6" />}
                <p className="page">{data.body1}</p>
                {data.image2 && <img src={data.image2} alt="" className="mx-auto my-6" />}
                {data.image3 && <img src={data.image3} alt="" className="mx-auto my-6"/>}
                <p className="page">{data.body2}</p>
                
            </div>
        </Layout>
    )
}

export default NewsPage