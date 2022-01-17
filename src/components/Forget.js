import * as React from 'react';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import Notification from './Notification';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import gold from '../images/forget-1.jpg';
const color = "#ffffff";



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to="/login"  style={{textDecoration:"none", color:"goldenrod"}}>
        Goldling
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Forget() {
  const[notify,setnotify] = useState({isOpen:false,message:'',type:''})
  const history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
   
    
    fetch('http://localhost:3001/register/resetpass',{
      method:"post",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email
      })
  }).then(res=>res.json())
  .then(data=>{
     if(data.error){
        setnotify({isOpen:true,message:data.error,type:"error"});
     }
     else{
         setnotify({isOpen:true,message:data.message,type:"success"});
        
     }
  }).catch(err=>{
      console.log(err)
  })


  };

  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
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
        <Grid item xs={12} sm={6} md={4} component={Paper}  square backgroundColor={color}>
          <Box
            sx={{
              my: 25,
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
              Forget Password..??
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Send mail
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link to="/login" style={{textDecoration:"none" , color:"green"}}>
                  Ahh.. Now I remember my password - {"Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Notification notify={notify} setnotify={setnotify}/>
    </ThemeProvider>
  );
}