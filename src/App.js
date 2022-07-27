import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js'
import About from './pages/about.js';
import Product from './pages/product';
import Error from './error';
import Dashboard from './pages/dashbord/dashboard';
import Stat from './pages/dashbord/stats';
import Profile from './pages/dashbord/profile';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Sharedlayout from './pages/sharedlayout';

function App() {
  return (
    <BrowserRouter>
 
    <Routes>
      <Route path='/' element={<Sharedlayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='product' element={<Product/>}/></Route>
      <Route path="*" element={<Error/>}/>
      <Route path='dashboard' element={<Dashboard/>}>
        <Route path="stats" element={<Stat/>}/>
        <Route path="profile" element={<Profile/>}/>
       

      </Route>

    </Routes>
   
    </BrowserRouter>
   
  );
}

export default App;
