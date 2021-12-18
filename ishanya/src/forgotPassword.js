import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './catalog.css'
import { Typography } from '@mui/material';


export default function ForgotPassword() {
  return (    
      <div>      

         {/*----------FORGOT PASSWORD---------*/}  


          <Card  sx={{maxWidth:400,margin:'50px auto'}}>         
             <CardContent >
             <Typography variant="h6" >
                Reset Password
            </Typography>
            <br/>
            <Typography variant="p" >
              6 digit code sent to  123@gmail.com
            </Typography>
            <br/>
            <br/>
             <TextField
               label="6 - Digit code"
               id="outlined-size-small"
               size="small"
             />
             <br/>
             <br/>
             <TextField
               label=" New Password"
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
             <Button variant="contained">Confirm</Button>   
             <br/>
             <br/>                       
            </CardContent>   
           </Card>
            {/*----------END OF FORGOT PASSWORD---------*/}  
      </div> 
      
  );
}