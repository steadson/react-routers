import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js'
import About from './pages/about.js';
import Product from './pages/product';
import Error from './error';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='product' element={<Product/>}/>
      <Route path="*" element={<Error/>}/>

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
