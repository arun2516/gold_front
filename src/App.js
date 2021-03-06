import Login from './components/Login';
import './App.css';
import SignUp from './components/Signup';
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom"

import Home from './components/Home';

import Goldcalculator from './components/Goldcalculator';
import Adminlogin from './components/Adminlogin';
import Adminpage from './components/Adminpage';
import Contactus from './components/Contactus';
import Sellgold from './components/Sellgold';
import Enquirypage from './components/Enquirypage';
import Marketingteam from './components/Marketingteam';


function App() {
 const admintoken = localStorage.getItem("admintoken");
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/admin" element={<Adminlogin/>}/>
       <Route path="/adminpage" element={(admintoken?<Adminpage/>:<Navigate replace to="/admin"/>)}/>
       <Route path="/enquirypage" element={(admintoken?<Enquirypage/>:<Navigate replace to="/admin"/>)}/>
       <Route path="/marketingteam" element={(admintoken?<Marketingteam/>:<Navigate replace to="/admin"/>)}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/goldcalc" element={<Goldcalculator/>}/>
       <Route path="/contactus" element={<Contactus/>}/>
       <Route path="/sellgold" element={<Sellgold/>}/>
    </Routes>
   </Router>

  );
}

export default App;
