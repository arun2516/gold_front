import React, { useEffect , useState} from 'react';
import { Button3 } from './Button3';
import { Link } from 'react-router-dom';
import axios from "axios";
import {Button,Table, TableContainer, TableHead, TableRow, TableCell, TableBody,Paper,Typography, InputLabel,Select, MenuItem, FormControl, Stack} from '@mui/material'
import Notification from './Notification';

function Enquirypage() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu=()=>setClick(false);
    const[enquirylist,setenquirylist]=useState([]);
    const[members,setmembers] = useState([]);
    const[del,setdel]=useState(0);
    const[notify,setnotify] = useState({isOpen:false,message:'',type:''})
    


    useEffect(async()=>{
      const response = await axios.get("https://goldling.herokuapp.com/marketing/getmembers");
      const data = response.data.map(elem=> elem.name);
      setmembers(data);

      const response2 = await axios.get("https://goldling.herokuapp.com/enquiry/getcontactus");
      setenquirylist(response2.data);

    },[del])




    const closeMobileMenu1 = () => {
        localStorage.removeItem('token');
        setClick(false);
      }

      const handleclick1 = async(id)=>{
        try{
          await axios.delete(`https://goldling.herokuapp.com/enquiry/deletecontactus/${id}`);
          setnotify({isOpen:true,message:"Enquiry deleted Successfully",type:"success"});
          setdel(del+1)
        }catch(err){
          setnotify({isOpen:true,message:"Error in Deleting Enquiry ..plzz contact Developing Team to rectify Problem",type:"error"})
        }
        
      }


      const handleclick = async(id)=>{
        const data = enquirylist.filter(elem=>{
          if(elem._id == id) return elem
        })
        try{
         await axios.post("https://goldling.herokuapp.com/contact/postassign", {
          name:data[0].name,
          city:data[0].city,
          email:data[0].email,
          mobileno:data[0].mobileno,
          message:data[0].message,
          id:data[0]._id
        });
        setnotify({isOpen:true,message:"Assign To Marketing Team Successfully",type:"success"});

        
        }catch(err){
          setnotify({isOpen:true,message:"Error in Assigning ..plzz contact Developing Team to rectify Problem",type:"error"})
        }

        try{
         await axios.delete(`https://goldling.herokuapp.com/enquiry/deletecontactus/${id}`)
         setdel(del+1)
      }catch(err){
        console.log(err);
      }


      }

      

      
  return (
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
                  <TableCell align='center'>Assign to Marketing</TableCell>
                  <TableCell align='center'>Remove</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
               {enquirylist.map(enquiry=>{
                 return(
                   <TableRow hover key={enquiry._id}>
                     <TableCell align="center">{enquiry.name}</TableCell>
                     <TableCell align='center'>{enquiry.mobileno}</TableCell>
                     <TableCell align="center">{enquiry.email}</TableCell>
                     <TableCell align='center'>{enquiry.city}</TableCell>
                     <TableCell align='center'><Typography>{enquiry.message}</Typography></TableCell>
                     <TableCell align='center'><Button onClick={()=>handleclick(enquiry._id)}>Assign</Button>
                    </TableCell>
                     <TableCell align='center'><Button onClick={()=>handleclick1(enquiry._id)}>Delete Enquiry</Button></TableCell>
                   </TableRow>
                 )
               })}
              </TableBody>
            </Table>
            </TableContainer>
            </Paper>
            </div>
        </div>
        <Notification  notify={notify} setnotify={setnotify} />
  </div>);
}

export default Enquirypage;
