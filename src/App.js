import Login from './components/Login';
import './App.css';
import SignUp from './components/Signup';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Forget from './components/Forget';
import Home from './components/Home';
import Newpassword from './components/Newpassword';
import Goldcalculator from './components/Goldcalculator';
import Adminlogin from './components/Adminlogin';
import Adminpage from './components/Adminpage';


function App() {
 
  return (
   <Router>
     <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route path="/admin" element={<Adminlogin/>}/>
       <Route path="/adminpage" element={<Adminpage/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/forget" element ={<Forget/>}/>
       <Route path="/newpass/:token" element={<Newpassword/>}/>
       <Route path="/goldcalc" element={<Goldcalculator/>}/>
    </Routes>
   </Router>

  );
}

export default App;
