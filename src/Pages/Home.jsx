import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layouts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useNavigate } from "react-router-dom";
import { fetchById } from "../Redux/Slices/inforSlices";

function Home(){
   const data = useSelector((state)=>state.info);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const newsData = useSelector((state)=> state.news)
   console.log(newsData.latest)
   const latest = newsData?.latest?.slice(0,6);
   const top = newsData?.top?.slice(0,6);
   const international = newsData?.international?.slice(0,6);

   async function handleFetchId(id){
      await dispatch(fetchById(id));
       navigate(`/infos/${id}`)
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
       <div>
          <div className="m-8">
            <h1 className="text-4xl text-center m-4">Information</h1>
             <div>
               <Slider {...settings}>
               {info.map(element => {
                  return(
                 
               <div onClick= { ()=>{handleFetchId(element._id)}} className="relative " key={element._id}>
                     <img src={element.image1} alt="" className="w-96 m-auto " />
                     <h2 className="absolute bottom-3 text-white lg:left-60">{element.title}</h2>
                  </div>
                   )
               })}
              </Slider> 
              <Link to={'/info'}>
               <h1 className="mt-8 mx-auto bg-lime-500 w-20 text-center">View All</h1>
              </Link>
             </div>
          </div>

          <div>
            <h1 className="text-4xl text-center mb-8">Latest News</h1>

           <div className="relative">
            <img src={latest[0]?.image1} alt="" className="m-auto w-1/2"/>
            <h1 className="absolute left-1/2 bottom-3 text-white">{latest[0]?.title}</h1>
           </div>
           <div className="w-3/4 m-auto">
           {latest.slice(1).map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id}>
                  <h1 className="mx-6 text-2xl m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
         <Link to={'/news/latest'}>
               <h1 className="mt-8 mx-auto bg-lime-500 w-20 text-center">View All</h1>
              </Link>
           </div>


           <div>
            <h1 className="text-4xl text-center mb-8">Top News</h1>

           <div className="relative">
            <img src={top[0]?.image1} alt="" className="m-auto w-1/2"/>
            <h1 className="absolute left-1/2 bottom-3 text-white">{top[0]?.title}</h1>
           </div>
           <div className="w-3/4 m-auto">
           {top.slice(1).map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id}>
                  <h1 className="mx-6 text-2xl m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
           </div>
           <Link to={'/news/top'}>
               <h1 className="mt-8 mx-auto bg-lime-500 w-20 text-center">View All</h1>
              </Link>



          </div>
          <div>
            <h1 className="text-4xl text-center mb-8">International News</h1>

           <div className="relative">
            <img src={international[0]?.image1} alt="" className="m-auto w-1/2"/>
            <h1 className="absolute left-1/2 bottom-3 text-white">{international[0]?.title}</h1>
           </div>
           <div className="w-3/4 m-auto">
           {international.slice(1).map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id}>
                  <h1 className="mx-6 text-2xl m-3">{el.title}</h1>
                  <img className="w-40 m-3" src={el.image1} alt="" />
                </div>
            )
         })}
           </div>
           <Link to={'/news/international'}>
               <h1 className="mt-8 mx-auto bg-lime-500 w-20 text-center">View All</h1>
              </Link>
         </div>
         </div>
       </div>
    </Layout>)
}

export default Home;