import logo from './logo.svg';
import './App.css';
import Loginsignup from './Components/Pages/Loginsignup';
import Signup from './Components/Pages/SignUp';
import Index from './Components/Pages/index';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
      <Route index element={<Index/>}></Route>
      <Route path="/index" element={<Index/>}></Route>
      <Route path="/LoginSignup" element={<Loginsignup/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>

        
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 
