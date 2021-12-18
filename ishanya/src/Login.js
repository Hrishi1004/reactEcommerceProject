import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './catalog.css'
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ForgotPassword from './forgotPassword';

export default function Login() {
  return (                 
        <Router>

          {/*----------LOGIN---------*/}  

          <div>
          <Card  sx={{maxWidth:400,margin:'50px auto'}}>         
             <CardContent >
             <Typography variant="h6" >
                Log In
            </Typography>
            <br/>
             <TextField
               label="Email id"
               id="outlined-size-small"
               size="small"
             />
             <br/>
             <br/>
             <TextField
               label="Password"
               id="outlined-size-small"
               type="password"
               size="small"
             />  
             <br/>    
                <a href="forgotpassword">forgot password</a>        
             <br/>
             <br/>           
             <Button variant="contained">Sign in</Button>   
             <br/>
             <br/>
             <Typography variant="h6" >
                   <a href="Register">Creat an account </a>   
            </Typography>                       
            </CardContent>   
           </Card>       
         </div>

        {/*----------END OF LOGIN---------*/}   

   </Router>
  );
}