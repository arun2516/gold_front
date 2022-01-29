import React ,{useState,useEffect} from 'react';
import { Button3 } from './Button3';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Grid,Button ,TextField, Typography,Table,Paper,TableCell,TableBody,TableHead,TableRow,TableContainer} from '@mui/material';
import axios from 'axios';
import Notification from './Notification';
import Marksingle from './Marksingle';

function Marketingteam() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const[filename,setfilename] = useState("");
    const [name,setname] = useState("");
    const[city,setcity]= useState("");
    const[email,setemail]=useState("");
    const[team,setteam]=useState([]);
    const[assign,setassign]=useState([]);

    const[notify,setnotify] = useState({isOpen:false,message:'',type:''})


    useEffect(async()=>{
      var response = await axios.get("https://goldling.herokuapp.com/marketing/getmembers");
      setteam(response.data)
      const response2 = await axios.get("https://goldling.herokuapp.com/contact/getassign");
      setassign(response2.data)
    },[notify])

    

    const closeMobileMenu1 = () => {
        localStorage.removeItem('token');
        setClick(false);
      }

      const onchangename = (event)=>{
        setname(event.target.value)
      }
      const onchangecity = (event)=>{
        setcity(event.target.value)
      }
      const onchangeemail = (event)=>{
        setemail(event.target.value)
      }

      const onChangeFile = e =>{
          setfilename(e.target.files[0]);
      }

      const handleSubmit = async(event)=>{
          event.preventDefault();
          const data = new FormData();
          data.append('name',name);
          data.append('email',email);
          data.append('city',city);
          data.append('image',filename)
          
         try{
             await axios.post("https://goldling.herokuapp.com/marketing/addmember",data)
             setnotify({isOpen:true,message:"New Marketing Consultant Added Successfully",type:"success"});
      
                
         }catch(err){
             setnotify({isOpen:true,message:"Error in Adding New Consultant",type:"error"})
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
              Dashboard
            </Link>
          </li>
          <li className='nav-item'>
          <Link to='/enquirypage' className='nav-links' onClick={closeMobileMenu}>
              Enquiry
            </Link>
            </li>
          <li className='nav-item'>
          <Link to='/marketingteam' className='nav-links' onClick={closeMobileMenu}>
              MarketingTeam
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
      <div style={{marginTop:"20px"}}>
          <h2 style={{marginLeft:"20px", marginBottom:"20px"}}>Projects Assigned To Marketing Team</h2>
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
                 

                </TableRow>
              </TableHead>
              <TableBody>
               {assign.map(assign=>{
                 return(
                   <TableRow hover key={assign._id}>
                     <TableCell align="center">{assign.name}</TableCell>
                     <TableCell align='center'>{assign.mobileno}</TableCell>
                     <TableCell align="center">{assign.email}</TableCell>
                     <TableCell align='center'>{assign.city}</TableCell>
                     <TableCell align='center'><Typography>{assign.message}</Typography></TableCell>
                   </TableRow>
                 )
               })}
              </TableBody>
            </Table>
            </TableContainer>
            </Paper>
            </div>
        </div>
      <div>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          
          <Box component="form" noValidate  sx={{ mt: 3 }} onSubmit={handleSubmit}  style={{width:"50%"}}>
          <h1 style={{color:"goldenrod", marginBottom:"2%"}}> ADD New Marketing Consultant:</h1>
              <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <TextField
                  onChange={onchangename}
                  name="name"
                  value={name}
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
                
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                onChange={onchangecity}
                value={city}
                  name="city"
                  required
                  fullWidth
                  id="city"
                  label="City"
                  autoFocus
                />
                  </Grid>
                  <Grid item xs={12}>
                  <TextField
                  onChange={onchangeemail}
                  value={email}
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoFocus
                />

                  </Grid>
                  <Grid item xs={12}>
                    <Typography>Add Consultant Image</Typography>
                  <input type="file" name='image' onChange={onChangeFile}/>
                  </Grid>
                  <Button type="submit" variant="contained"sx={{ mt: 3, mb: 2 }}>Add new Consultant</Button>
              </Grid>
          </Box>
          </div>
          <div>
            
          </div>
          <div className='consultant-list'>
            {team.map((member)=>(<Marksingle name={member.name} city={member.city} email={member.email} image={member.image} id={member._id}/>))}
      </div>
      <Notification notify={notify} setnotify={setnotify}/>
    </div>
    </div>
  ) 
}

export default Marketingteam;
