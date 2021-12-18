import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import logo from './11.png'
import './cart.css'
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Address from './Address'

export default function Cart() {
  const theme = useTheme();

  return (
    <Router>
    <>

     {/*----------CART---------*/}

        {/*----------CART HEADER---------*/}

    <div style={{backgroundColor:'#dfdfdf'}}>
        <card sx={{width:'100%'}}>
         <Typography component="div" variant="h5" >
          My Cart
          </Typography>
          <hr/>
         </card>     
      
    {/*----------CART ITEM START---------*/}  

    <div>

     {/*----------CART ITEM---------*/}  

    <div className="cartContainer"> 
     <Card  className="cartContainerItem" sx={{padding:'10px'}}>
     <CardMedia
        component="img"
        sx={{ maxWidth:151,maxHeight:151}}
        image={logo}        
      />       
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>          
        <CardContent sx={{textAlign:'left' }}>        
          <Typography component="div" variant="h6">
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography sx={{paddingBottom:'5px'}} variant="p" color="text.secondary" component="div">
            QTY : 1 Liter
          </Typography>
          <Typography sx={{paddingBottom:'5px'}} variant="p" color="text.secondary" component="div">
           PRICE: ₹ 2000 
           <br/>
           <br/>
           <Button  variant="contained">Delete</Button>
          </Typography>
        </CardContent>        
      </Box> 
     </Card>

      {/*----------CART ITEM END---------*/}  


       {/*----------BILL---------*/}  

        <Card  className="cartContainersubtotal">
         <CardContent sx={{width:'80%',margin:'auto',textAlign:'left'}}> 
          <Typography component="div" variant="h6" sx={{textAlign:'center'}}>
           Bill
            <br/>
          </Typography>
          <hr/>     
          <Typography  sx={{paddingBottom:'5px'}} variant="p" color="text.secondary" component="div">
            Number of Items: 2
          </Typography>
      
          <Typography sx={{paddingBottom:'5px'}} variant="p" color="text.secondary" component="div">
            Total Price : ₹ 7000 
          </Typography>
          <hr/>
          <Typography variant="p" color="text.secondary" component="div">
           Sub Total : ₹ 7000 
          </Typography>
          <br/>
          <div style={{textAlign:'center'}}>
          <Button href="Address" variant="contained">Submit</Button>
          </div>
        </CardContent>   
      </Card>
     </div>
    </div>    
    </div>  

  

  {/*----------END OF CART---------*/}

    {/*----------ROUTING AREA---------*/}    

    <Switch>         
          <Route path ="/Address" component={Address}/>       
    </Switch>
  </>
</Router>
  );
}