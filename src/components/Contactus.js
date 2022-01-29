import * as React from 'react';
import { useState } from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import gold from '../images/contactus.jpg';
import Navbar from './Navbar';
import { Footercontainer } from './Footer/Footercontainer';
import Notificatiocontactus from './Notificationcontactus';
const color = "#ffffff";

function Copyright(props) {
  
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="/login" style={{textDecoration:"none", color:"goldenrod"}}>
        Goldling
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Contactus() {

  const[notify,setnotify] = useState({isOpen:false,message:'',type:''})
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   
    try{
      await axios.post('https://goldling.herokuapp.com/enquiry/contactus',{
        name:data.get('name'),
        city:data.get('city'),
        mobileno:data.get('mobileno'),
        email:data.get('email'),
        message: data.get('message')
      })
      setnotify({isOpen:true,message:"Enquiry Submitted Successfully.. Our Team Will Contact You ",type:"success"});
      
    }catch(err){
      console.log(err);
      setnotify({isOpen:true,message:"Error in Creating Enquiry..Plzz Try Again Later",type:"error"})
    }
  };

  return (
      <div>
          <Navbar/>
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        
        <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square backgroundColor={color} >
        <Box
          sx={{
            marginTop: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
           <Typography component="h1" variant="h3" color='goldenrod' fontFamily='Mochiy Pop P One'>
            Goldling
          </Typography>
          <Typography component="h1" variant="h6" color='goldenrod' fontFamily='Mochiy Pop P One' sx={{ mt: 1 }}>
            Sell Your Gold
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  
                />
              </Grid>
           
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="mobileno"
                  label="Mobile-Number"
                  id="mobileno"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                 
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
        </Grid>
        <Grid
          item
          xs={false}
          sm={6}
          md={8}
          sx={{
            backgroundImage: `url(${gold})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      <Notificatiocontactus notify={notify} setnotify={setnotify}/>
    </ThemeProvider>
    <Footercontainer/>
    </div>
  );
}