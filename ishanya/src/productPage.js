import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid, TextField } from '@mui/material';

import im from './11.png';
import './catalog.css'
import './productPage.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Cart from './cart';


export default function ProductPage() {
  return (
      
   <Router>
    <>

      {/*------PRODUCT PAGE------*/}
      
      <Grid container className="productPageContainer">
        <Grid item  className="productPageImageContainer">

          {/*------MAIN IMAGE------*/}

            <img src={im} className="productPageMainImage"/>        
            
           {/*------SUB IMAGES------*/}

            <Grid item >
              <img src={im}
              style={{padding:5,maxWidth:60,borderRadius:10}}/>
               <img src={im}
               style={{padding:5,maxWidth:60,borderRadius:10}}/>
               <img src={im}
               style={{padding:5,maxWidth:60,borderRadius:10}}/>
               <img src={im}
               style={{padding:5,maxWidth:60,borderRadius:10}}/>
            </Grid>
           </Grid>

          {/*------TEXT DETAILS------*/}

           <Grid className="productPageTextContainer">

            <Typography variant="h4" className="productPageTextHeader" >
              Ishanya 100% Pure Coconut Oil, 1 L
            </Typography>
              <br/>
            <Typography variant="body2" style={{fontSize:'18px',paddingBottom:20}}>1 Liter can</Typography>               
                  
            <Typography variant="body2" style={{fontSize:'18px',paddingBottom:20}}>₹ 500 / liter</Typography>    
               <div className="buyButtonMobile">
                 <Button  variant="contained" disableElevation style={{marginBottom:30,}}> Buy</Button> 
              </div>
            <Typography variant="body2" color="text.secondary" style={{overflow:'hidden'}}>
                About this item
                No added preservatives or harsh chemicals
                Unrefined and cold pressed for long lasting freshness
                Ideal for keeping hair smooth and strong
                100% Pure coconut crushing oil
                   <br>
                  </br>
                  <br/>
                  About this item
                  <br/>
                  <br/>
                  No added preservatives or harsh chemicals
                  <br/><br/>
                  Unrefined and cold pressed for long lasting freshness
                  <br/><br/>
                  Ideal for keeping hair smooth and strong
                  <br/><br/>
                  100% Pure coconut crushing oil
            </Typography>
               <br/>
            <div  className="buyButton">
              <Button href="/cart" variant="contained" disableElevation style={{marginBottom:30,}}> Buy</Button>    
            </div>                       
           </Grid>     
         </Grid> 

       {/*------ PRODUCT PAGE------*/} 
    

       {/*------ ROUTING AREA------*/} 
      <Switch>          
          <Route path ="/cart" component={Cart}/>    
      </Switch>
     </>
    </Router>
  );
}