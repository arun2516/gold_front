import * as React from 'react';
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {Link} from "react-router-dom"; 
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import gold from '../images/gold3.png'
const color = "#fbe9e9";

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

export default function Login() {
  const history = useNavigate();
  const[error,seterror]=useState("");

  
  const handleSubmit = async(event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try{
      var response = await axios.post('https://goldling.herokuapp.com/register/signin',{
        email:data.get('email'),
        password: data.get('password')
      })
      if(response.data){
        seterror("");
         await localStorage.setItem('token',response.data);
         history('/');
         window.location.reload();
      }
    }catch(err){
      seterror("***Username/Password is wrong***");
    }
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
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address:(raja31@gmail.com)"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password(12345678)"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Typography style={{color:"red"}}>{error}</Typography>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
              >
                Sign In
              </Button>
              <div style={{display:"flex", justifyContent:"center", marginBottom:"12px"}}>
              <Link to="/admin" style={{textDecoration:"none", color:"darkgreen"}} >
              For Admin Sign In Click Here
                  </Link>
                  </div>
             
              <Grid container>
                <Grid item>
                  <Link to="/signup" style={{textDecoration:"none", color:"blue"}} >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
