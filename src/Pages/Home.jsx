import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layouts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchById } from "../Redux/Slices/inforSlices";
import './style.css'
import { useState } from "react";
import { newsFetchById } from "../Redux/Slices/newsSlices";
import logo from '../assets/logo.svg'
import { Helmet } from "react-helmet";

function Home(){
   const data = useSelector((state)=>state.info);
   const dispatch = useDispatch();
   const navigate = useNavigate();


   const newsData = useSelector((state)=> state.news)
   const latest = newsData?.latest?.slice(0,6);
   const top = newsData?.top?.slice(0,6);
   const international = newsData?.international?.slice(0,6);

   async function handleFetchId(id){
      await dispatch(fetchById(id));
       navigate(`/infos/${id}`)
   }

   async function handleNewsFetchId(id){
      await dispatch(newsFetchById(id))
      navigate(`/news/${id}`)
   }

   

   const info = data.infoState.slice(0,6);
   

   const settings = {
      dots: true,
      infinite : true,
      speed: 500,
      slidesToShow : 2,
      SlidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear",
   }
    return(
    <Layout>
       <div className="container">
          <div className="m-8 mx-12">
          <Helmet>
            <title>Vedic facts</title>
            <meta property="og:title" content="Vedic Fact" />
            <meta property="og:description" content="vedic Kshatriya"/>
            <meta property="og:image" content={logo}/>
            <meta property="og:url" content="https://vedicinfos.in"/>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="vedic History" />
            <meta name="twitter:description" content="" />
            <meta name="twitter:image" content={logo} />
         </Helmet>
            <h1 className=" text-center m-4">Vedic Facts</h1>
             <div>
               <Slider {...settings}>
               {info.map(element => {
                  return(
                 
               <div onClick= { ()=>{handleFetchId(element._id)}} className="relative" key={element._id}>
                     <img src={element.image1} alt="" className="w-96 m-auto " />
                     <h2 className="absolute bottom-3 text-white lg:left-60">{element.title}</h2>
                  </div>
                   )
               })}
              </Slider> 
              <Link to={'/info'}>
               <h2 className="mt-8 mx-auto bg-lime-500 w-20 text-center ">View All</h2>
              </Link>
             </div>
          </div>

        <div>
            <h1 className=" text-center mb-8">Latest News</h1>

           <div className="relative " onClick={()=>{handleNewsFetchId(latest[0]?._id)}}>
            <img src={latest[0]?.image1} alt="" className="m-auto lg:w-1/2"/>
            <h1 className="absolute left-1/2 bottom-3 text-white">{latest[0]?.title}</h1>
           </div>
           <div className="lg:w-3/4 m-auto">
           {latest.slice(1).map(el=>{
            return(
                <div  className="flex m-10 shadow-lg" key={el._id} onClick={()=>{handleNewsFetchId(el?._id)}}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
         <Link to={'/news/latest'}>
               <h2 className="mt-4 mx-auto bg-lime-500 w-20 text-center mb-14">View All</h2>
              </Link>
           </div>


           <div>
            <h1 className=" text-center mb-8">Top News</h1>

           <div className="relative" onClick={()=>{handleNewsFetchId(top[0]?._id)}}>
            <img src={top[0]?.image1} alt="" className="m-auto lg:w-1/2"/>
            <h1 className="absolute left-1/2 bottom-3 text-white">{top[0]?.title}</h1>
           </div>
           <div className="lg:w-3/4 m-auto">
           {top.slice(1).map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id} onClick={()=>{handleNewsFetchId(el?._id)}}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
           </div>
           <Link to={'/news/top'}>
               <h2 className="mt-4 mx-auto bg-lime-500 w-20 text-center mb-14">View All</h2>
              </Link>



          </div>
          <div>
            <h1 className=" text-center mb-8">International News</h1>

           <div className="relative" onClick={()=>{handleNewsFetchId(international[0]?._id)}}>
            <img src={international[0]?.image1} alt="" className="m-auto lg:w-3/2 "/>
            <h1 className="absolute left-1/2 bottom-3 text-white">{international[0]?.title}</h1>
           </div>
           <div className="lg:w-3/4 m-auto">
           {international.slice(1).map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id} onClick={()=>{handleNewsFetchId(el?._id)}}>
                  <h1 className="mx-6  m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
           </div>
           <Link to={'/news/international'}>
               <h2 className="mt-4 mx-auto bg-lime-500 w-20 text-center mb-14">View All</h2>
              </Link>
         </div>
         </div>
       </div>
    </Layout>)
}

export default Home;