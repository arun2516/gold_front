import * as React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Notification from "./Notification";
import {Link,useParams,} from "react-router-dom"; 
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import gold from '../images/resetpass2.jpg'
const color = "#ffffff";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link to ="/login" style={{textDecoration:"none", color:"goldenrod"}}>
        Goldling
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Newpassword() {
  const[notify,setnotify] = useState({isOpen:false,message:'',type:''})
  const history = useNavigate();
  const{token} = useParams();
  console.log(token);
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try{
      var response = await axios.post('http://localhost:3001/register/newpass',{
        password: data.get('password'),
        token:token
      })
      console.log(response.data);
      setnotify({isOpen:true,message:"Password Updated Successfully PLzzz Click  Login Link",type:"Success"})
      
    }catch(err){
      
      setnotify({isOpen:true,message:"Password Updation Failure ",type:"error"})
      console.log(err);
    }
  };

  return (
    <ThemeProvider theme={theme} >
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={6} md={4} component={Paper} elevation={6} square backgroundColor={color}>
          <Box
            sx={{
              my: 8,
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
              Update Password
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
             
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="New-Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
              >
                Update Password
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link to="/login" style={{textDecoration:"none", color:"blue"}} >
                    {"Click Here For Login"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
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
      <Notification notify={notify} setnotify={setnotify}/>
    </ThemeProvider>
  );
}