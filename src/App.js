import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
function App() {
  return (
     <>
         <div className='main'>
         <BrowserRouter>
           <Routes>
           <Route path='/' element={<Home/>}/>
           </Routes>
         </BrowserRouter>
         </div>
     </>
  );
}

export default App;
