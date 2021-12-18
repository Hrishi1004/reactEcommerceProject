import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Typography } from '@mui/material';


export default function Address() {
  return (
      <div>
          <Card  sx={{maxWidth:400,margin:'50px auto'}}>
             <CardContent >                
               <br/>
              <Typography variant="h5" sx={{textAlign:'center'}} className="productPageTextHeader" >
                 Address
               </Typography>
               <br/>
             <TextField
               label="First Name"
               id="outlined-size-small"
               size="small"
             />
              <br/>
             <br/>
             <TextField
               label="Last Name"
               id="outlined-size-small"
               size="small"
             />
             <br/>
             <br/>
             <TextField
               label="Address "
               id="outlined-size-small"
               size="small"
             />
              <br/>
             <br/>
             <TextField
               label="City"
               id="outlined-size-small"
               size="small"
             />
             <br/>
             <br/>
            <TextField
               label="state"
               id="outlined-size-small"
               size="small"
             />
              <br/>
             <br/>
             <TextField
               label="Country"
               id="outlined-size-small"
               size="small"
             />
              <br/>
             <br/>
             <TextField
               label="Pin code"
               id="outlined-size-small"
               type="number"
               size="small"
             />
             <br/>
             <br/>
             <Button variant="contained">Submit</Button>
            </CardContent>   
           </Card>
      </div> 
      
  );
}