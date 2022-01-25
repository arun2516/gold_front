import React, { useState } from 'react';
import {Button3} from './Button3'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Box, FormControl, MenuItem, InputLabel,Select, TextField,Stack, Button,} from '@mui/material'
import './Navbar.css';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Notificationadmin from './Notificationadmin';

function Adminpage() {
  const[notify,setnotify] = useState({isOpen:false,message:'',type:''})
  const history = useNavigate();
    const[state,setstate]=useState("");
    const[carat24,setcarat24] = useState(0);
    const[carat22,setcarat22] = useState(0);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    
    const closeMobileMenu1 = () => {
    localStorage.removeItem('token');
    setClick(false);
  }

  const handleChange = (event) => {
    setstate(event.target.value);
  };

  const handleChange1 = (event) => {
    setcarat24(event.target.value);
  };

  const handleChange2 = (event) => {
    setcarat22(event.target.value);
  };



  const handlesubmit = async(event)=>{
    event.preventDefault();
    const localToken = localStorage.getItem('token');
    var decodedToken = jwt_decode(localToken);

    if(decodedToken.exp*1000 <= Date.now()){
      setnotify({isOpen:true,message:"Sorry Session Expired Please Login to Continue",type:"error"});
      
    }
        
    try{
      var response = await axios.put("http://localhost:3001/add/todayprice",
      {
        state:state,
        today:[carat24,carat22]
      },  {
        headers: {
            token: localToken
        }
    }
      )
      if(response.data){
        setnotify({isOpen:true,message:`New Price for ${state} is updated Successfully`,type:"success"})
      }
    }catch(err){
      setnotify({isOpen:true,message:"Sorry Price not updated Successfully",type:"error"});

    }
  
  }


  return(
    <div>
        <nav className='navbar'>
        <Link to='/adminpage' className='navbar-logo' onClick={closeMobileMenu}>
          Goldling Admin
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/adminpage' className='nav-links' onClick={closeMobileMenu}>
              Admin Dashboard
            </Link>
          </li>
          <li>
            <Link
              to='/login'
              className='nav-links-mobile'
              onClick={closeMobileMenu1}>Sign Out</Link>
        </li>
        </ul>
      <Button3/>
      </nav>
        <div className='goldinput'>
        <Box sx={{ width:"80%", marginTop:"5%" ,paddingLeft:"10%",marginLeft:"10%",  marginBottom:"5%"}}>
        <FormControl component="form" onSubmit={handlesubmit}  required>
                <Stack direction="row" spacing={2}>

                    <div className="selectcity">
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" style={{width:"120px"}} value={state}  label="state" onChange={handleChange} required>
                        
                            <MenuItem value="India">India</MenuItem>
                            <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                            <MenuItem value="Amritsar">Amritsar</MenuItem>
                            <MenuItem value="Bangalore">Bangalore</MenuItem>
                            <MenuItem value="Bhopal">Bhopal</MenuItem>
                            <MenuItem value="Bhubaneswar">Bhubaneswar</MenuItem>
                            <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                            <MenuItem value="Chennai">Chennai</MenuItem>
                            <MenuItem value="Coimbatore">Coimbatore</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="Faridabad">Faridabad</MenuItem>
                            <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                            <MenuItem value="Jaipur">Jaipur</MenuItem>
                            <MenuItem value="Kanpur">Kanpur</MenuItem>
                            <MenuItem value="Kerala">Kerala</MenuItem>
                            <MenuItem value="Kochi">Kochi</MenuItem>
                            <MenuItem value="Kolkata">Kolkata</MenuItem>
                            <MenuItem value="Lucknow">Lucknow</MenuItem>
                            <MenuItem value="Madurai">Madurai</MenuItem>
                            <MenuItem value="Mangalore">Mangalore</MenuItem>
                            <MenuItem value="Meerut">Meerut</MenuItem>
                            <MenuItem value="Mumbai">Mumbai</MenuItem>
                            <MenuItem value="Mysore">Mysore</MenuItem>
                            <MenuItem value="Nagpur">Nagpur</MenuItem>
                            <MenuItem value="Nashik">Nashik</MenuItem>
                            <MenuItem value="Patna">Patna</MenuItem>
                            <MenuItem value="Pune">Pune</MenuItem>
                            <MenuItem value="Surat">Surat</MenuItem>
                            <MenuItem value="Vadodara">Vadodara</MenuItem>
                            <MenuItem value="Vijayawada">Vijayawada</MenuItem>
                            <MenuItem value="Visakhapatnam">Visakhapatnam</MenuItem>
                        
                    </Select>
                    </div>
                    

                    <div>
                    <TextField type="number" id="outlined-name" label="24Carat(10grams)" value={carat24} onChange={handleChange1} required></TextField>
                    </div>
                    <div>
                    <TextField type="number"  id="outlined-name" label="22Carat(10grams)" value={carat22} onChange={handleChange2}  required></TextField>
                    </div>

                    <div>
                        <Button variant="outlined" type="submit">
                            Add Today Price
                        </Button>
                    </div>

                    </Stack>
                    
                </FormControl>
        </Box>
        </div>
        <Notificationadmin notify={notify} setnotify={setnotify}/>
    </div>
  ) 
}

export default Adminpage;
