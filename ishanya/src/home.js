import ProductCard from './Catalog'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


export default function Home() {
    return (
        <Router>

       {/*----------HOME---------*/}  

        <>
        <div>

              {/*----------HOME CONTENT---------*/}  

            <div style={{maxWidth:500,padding:'0 50px',margin:'200px auto 300px auto'}}>
                <Typography gutterBottom variant="h5">Ishanya coconut processing </Typography>
                <Typography gutterBottom variant="p">Nature Crest pure coconut oil extracted from the cold pressing process of selected quality olives to give a splendid taste and rich aroma to the preparation. Pure coconut oil perfect for food</Typography><br/><br/>
                <Button  href="Catalog" variant="contained" size="medium" disableElevation> View products </Button>
           </div>       
        </div>
        <ProductCard/>
        </>
           
     {/*----------END OF HOME---------*/}  

      <Switch>     
        <Route path ="/Catalog" component={ProductCard}/>    
      </Switch>
   </Router>
    )
}