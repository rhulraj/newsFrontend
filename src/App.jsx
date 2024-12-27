
import './App.css';
import Home from './Pages/Home';
import {Route , Routes} from 'react-router-dom';
import CreateInfo from './Pages/CreateInfo';
import Info from './Pages/Info';
import CreateNews from './Pages/CreateNews';
import LatestNews from './Pages/Latest.News';
import TopNews from './Pages/TopNews';
import InternationalNews from './Pages/International';
import SignUpPresentaion from './Pages/Auth/SignUpPresentation';
import SignUp from './Pages/auth/SignUp';
import VerifyOtp from './Pages/Auth/VerifyOtp';

function App() {

  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/admin/createInfo' element = { <CreateInfo/>} />
      <Route path='/info' element = {<Info/>}/>
      <Route path='/admin/createNews' element = {<CreateNews />} />
      <Route path='/news/latest' element = {<LatestNews/>} />
      <Route path='/news/top' element = {<TopNews/>} />
      <Route path='/news/international' element = {<InternationalNews/>} />
      <Route path='/user/createAccount' element ={<SignUp/>} />
      <Route path='/user/verifyOtp' element = {<VerifyOtp/>} />
    </Routes>
    
  )
}

export default App;

