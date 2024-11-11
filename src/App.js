import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Characters from './pages/characters';
import Books from './pages/books';
function App() {
  return (
     <>
         <div className='main'>
         <BrowserRouter>
           <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/books' element={<Books/>}/>
           <Route path='/characters' element={<Characters/>}/>
           </Routes>
         </BrowserRouter>
         </div>
     </>
  );
}

export default App;
