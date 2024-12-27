import { useDispatch } from 'react-redux';
import logo from '../assets/logo.svg';
import { useEffect } from 'react';
import { fetchAllInfo, fetchById } from '../Redux/Slices/inforSlices';
import { fetchInternationalNews, fetchLatestNews, fetchTopNews } from '../Redux/Slices/newsSlices';

function Layout({children}){
     
    const dispatch = useDispatch()

    async function fetchInfo(){
        const info = await dispatch(fetchAllInfo());
        const latest = await dispatch(fetchLatestNews())
        const top = await dispatch(fetchTopNews());
        const International = dispatch(fetchInternationalNews())
        
    }
    
    useEffect(()=>{
       fetchInfo()
    },[])
    return(
        <>
        <nav className='bg-orange-500'>
           <div >
             <img src={logo} alt="" className='w-20 h-20 m-auto'/>
             <h1 className=' ml-1 text-xl text-center'>Vedic Info</h1>
           </div>
           <div >
            <div >
              <ul className='flex mt-6 text-lg'>
                <li className='ml-2'>Home</li>
                <li className='mx-3'>Information</li>
                <li className='mx-3'>Latest news</li>
                <li className='mx-3'>Top news</li>
              </ul>
            </div>
              
           </div>
        </nav>
        {children}
        </>
    )
}

export default Layout;