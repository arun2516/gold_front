import Login from './components/Login';
import './App.css';
import SignUp from './components/Signup';
import {BrowserRouter as Router, Routes,Route, Navigate} from "react-router-dom"
import Forget from './components/Forget';
import Home from './components/Home';
import Newpassword from './components/Newpassword';
import Goldcalculator from './components/Goldcalculator';
import Adminlogin from './components/Adminlogin';
import Adminpage from './components/Adminpage';
import Contactus from './components/Contactus';


function App() {
 const admintoken = localStorage.getItem("admintoken");
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/admin" element={<Adminlogin/>}/>
       <Route path="/adminpage" element={(admintoken?<Adminpage/>:<Navigate replace to="/admin"/>)}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/forget" element ={<Forget/>}/>
       <Route path="/newpass/:token" element={<Newpassword/>}/>
       <Route path="/goldcalc" element={<Goldcalculator/>}/>
       <Route path="/contactus" element={<Contactus/>}/>
    </Routes>
   </Router>

  );
}

export default App;
