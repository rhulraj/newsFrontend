import { useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layouts";

function InternationalNews(){


    
    const [initial, setIntial] = useState(0);
    const [end, setEnd] = useState(2);
    const [page, setPage] = useState(1)

     const news = useSelector((state) => state.news)
     const data = news.international.slice(initial, end);
     function next(){
        setEnd( end + 2 );
        setIntial( initial + 2 );
        setPage(page + 1)
     }
     function previous(){
        setEnd( end - 2 );
        setIntial( initial - 2 );
        setPage(page - 1)
     }

    return(<Layout>
      <div className="font-serif shadow-lg p-2 mx-2">
         <h1 className="text-center text-2xl">INTERNATIONAL NEWS</h1>
         {data.map(el=>{
            return(
                <div className="flex m-10 shadow-lg" key={el._id}>
                  <h1 className="mx-6 text-2xl m-3">{el.title}</h1>
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