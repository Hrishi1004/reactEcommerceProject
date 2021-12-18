import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './catalog.css'
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Login from './Login'

export default function Register() {
  return (
    <Router>

      {/*----------REGISTER---------*/}  

      <div>         
          <Card  sx={{maxWidth:400,margin:'50px auto'}}>         
             <CardContent >
             <Typography variant="h6" >
                Sign In
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
             <br/>
              <TextField
               label="Confirm Password"
               id="outlined-size-small"
               type="password"
               size="small"
             />
             <br/>
             <br/>           
             <Button variant="contained">Sign in</Button>   
             <br/>
             <br/>           
             <Typography variant="h6" >
                   <a href="Login" >Already have an account </a>   
            </Typography>                       
         </CardContent>   
        </Card>  
      </div>  
      
    {/*----------END OF REGISTER---------*/}  

      {/*----------ROUTING AREA---------*/}  

    <Switch>     
     <Route path ="/Login" component={Login}/>       
    </Switch>
</Router>     
  );
}