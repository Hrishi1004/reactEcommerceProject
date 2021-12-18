import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import logo from './11.png'
import ProductPage from './productPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './catalog.css'
export default function ProductCard() {
  return (
    <Router>

   {/*----------CATALOG---------*/}  

<div  className="productContainer">   
  <div className="productWrap">   

 {/*----------CATALOG ITEM START---------*/}  

    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
     
   {/*----------CATALOG ITEM END---------*/}  


    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card> <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card> <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>

     <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>

    
    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>


    
    <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>
     <Card  className="productCard"  sx={{maxWidth:'230px'}}>
       <CardActionArea>
        <CardMedia
          component="img"
          width="100"
          height="170"
          image={logo}
        />
        <CardContent style={{paddingTop:5,textAlign:'left'}}>
          <Typography gutterBottom variant="body2" component="div" style={{fontWeight:530,height:40,overflow:'hidden'}}>
          Ishanya 100% Pure Coconut Oil, 1 L
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{height:40,textAlign:'left',overflow:'hidden'}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        <CardActions style={{padding:'10px 0 0 0 ' ,display:"flex",justifyContent:'space-between'}}>
        <Typography variant="body2" color="text.secondary" >
          ₹ 500 / liter
        </Typography>
        <Button  href="productpage" variant="contained" size="small" disableElevation> Buy </Button>
       </CardActions>
        </CardContent>
      </CardActionArea>
    </Card>  
    </div>
  </div>
    
   {/*----------ROUTING AREA---------*/}  

    <Switch>          
          <Route path ="/productpage" component={ProductPage}/>       
    </Switch>
 </Router>
  );
}