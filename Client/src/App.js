import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from '../src/pages/Routes/Home';
import About from "./pages/Routes/About";
import Node from "./pages/Routes/Node";
import Contact from "./pages/Routes/Contact";
import Signup from './pages/Routes/Signup'
import Signin from './pages/Signindesign/Signin'



export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Node" element={<Node/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
      </Routes>
    </div>
  );
}
