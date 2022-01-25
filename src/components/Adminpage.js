import React, { useEffect, useState } from 'react';
import {Button3} from './Button3'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Box, FormControl, MenuItem, InputLabel,Select, TextField,Stack, Button,Breadcrumbs,Table, TableContainer, TableHead, TableRow, TableCell, TableBody,Paper,Typography} from '@mui/material'
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
    const[userdata,setuserdata] = useState([]);
    const[enquirylist,setenquirylist]=useState([]);

 
    useEffect(async()=>{
      const response = await axios.get("http://localhost:3001/register/getuserdata");
      setuserdata(response.data);
      const response2 = await axios.get("http://localhost:3001/enquiry/getcontactus");
      setenquirylist(response2.data);
    },[])

    console.log(userdata);
    
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
    const localToken = localStorage.getItem('admintoken');
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
            admintoken: localToken
        }
    }
      )
      console.log(response.data);
     
      if(response.data._id){
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
          Goldling
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/adminpage' className='nav-links' onClick={closeMobileMenu}>
              Admin-Dashboard
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
      <div className="heading">
                <Breadcrumbs separator="›"><h5>Admin</h5><h5>Dashboard</h5></Breadcrumbs>
                <h1>Update Today Gold Price</h1>
            </div>
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

        <div style={{marginTop:"20px"}}>
          <h2 style={{marginLeft:"20px", marginBottom:"20px"}}>Enquiry lists</h2>
          <div>
          <Paper sx={{ width: '95%', overflow: 'hidden', marginLeft:"2.5%" , border:"2px solid black"}}>
            <TableContainer sx={{ maxHeight: 440 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Mobile-No</TableCell>
                  <TableCell align="center">Email-Id</TableCell>
                  <TableCell align="center">City</TableCell>
                  <TableCell align="center">Message</TableCell>
                  <TableCell align='center'>Assign</TableCell>
                  <TableCell align='center'>Remove</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
               {enquirylist.map(enquiry=>{
                 return(
                   <TableRow key={enquiry._id}>
                     <TableCell align="center">{enquiry.name}</TableCell>
                     <TableCell align='center'>{enquiry.mobileno}</TableCell>
                     <TableCell align="center">{enquiry.email}</TableCell>
                     <TableCell align='center'>{enquiry.city}</TableCell>
                     <TableCell align='center'><Typography>{enquiry.message}</Typography></TableCell>
                     <TableCell align='center'><Button>Assign to Marketing Team</Button></TableCell>
                     <TableCell align='center'><Button>Delete Enquiry</Button></TableCell>
                   </TableRow>
                 )
               })}
              </TableBody>
            </Table>
            </TableContainer>
            </Paper>
            </div>
        </div>
        
        <div style={{marginBottom:"100px",marginTop:"30px"}}>
          <h2 style={{marginLeft:"20px", marginBottom:"20px"}}>Registered Users In Goldling</h2>
          <div>
          <Paper sx={{ width: '80%', overflow: 'hidden', marginLeft:"10%" , border:"2px solid black"}}>
            <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell align="center">User-Name</TableCell>
                  <TableCell align="center">Email-Id</TableCell>
                  <TableCell align='center'>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
               {userdata.map(user=>{
                 return(
                   <TableRow hover key={user._id}>
                     <TableCell  align="center">{user.username}</TableCell>
                     <TableCell align="center">{user.email}</TableCell>
                     <TableCell align='center'><Button variant="outlined">Send Promotion Email</Button></TableCell>
                   </TableRow>
                 )
               })}
              </TableBody>
            </Table>
            </TableContainer>
            </Paper>
            </div>
        </div>
        
        <Notificationadmin notify={notify} setnotify={setnotify}/>
    </div>
  ) 
}

export default Adminpage;
