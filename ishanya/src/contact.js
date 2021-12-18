import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './catalog.css'
import { Typography } from '@mui/material';


export default function Contact() {
  return (    
      <div>         
          <Card  sx={{maxWidth:400,margin:'50px auto'}}>         
             <CardContent>
             <Typography variant="h6" >
                Contact Us
            </Typography>
            <br/>
             <TextField
               label=" Your email id"
               id="outlined-size-small"
               size="small"
             />
             <br/>
             <br/>
             <TextField
               label=" Name"
               id="outlined-size-small"
               size="small"
             />
             <br/>
             <br/>
             <TextField
               label="Phone Number"
               id="outlined-size-small"
               type="number"
               size="small"
             />  
             <br/>
             <br/>   
             <TextField
               label="Description"
               id="outlined-size-small"
               size="small"
               multiline
               rows={5}
             />        
             <br/>
             <br/>
             <Button variant="contained">Submit</Button>                
            </CardContent>   
           </Card>
          
      </div> 
      
  );
}