import {useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.svg'
import './header.css'
import Contact from './contact'
import ProductCard from './Catalog';
import About from './about';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Cart from './cart';
import ProductPage from './productPage';
import Home from './home'
import Register from './Register';
import Address from './Address';
import Login from './Login';
import ForgotPassword from './forgotPassword';

export default function Appbar() {
 const [showLinks,setShowLinks] = useState(false);
  return (
    <Router>
       {/*----------HEADER----------*/}
    <> 
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}} >       
          <div>

            {/*------LOGO------*/}

           <img src={logo}
           href="home"
           style={{width:100,cursor:'pointer'}}/>
         </div>       
         <div className="desktopNav" id={showLinks ? "mobNav" : ""}>

            {/*------HEADER NAVIGATION LINKS------*/}

         <Button href="/home" color="inherit"> Home</Button>
          <Button href="/Catalog" color="inherit"> Products</Button>
          <Button href="/about" color="inherit"> About </Button>
          <Button href="/contact" color="inherit"> Contact </Button>
          <Button href="/cart" color="inherit"> Cart </Button>
          <Button href="/Register" color="inherit"> Sign In </Button>
        </div>
        <div className="menuIcon">
        <IconButton onClick={()=>setShowLinks(!showLinks)} style={{backdropColor:'white'}} > < MenuIcon color="white" /> </ IconButton>
        </div>
       
       </Toolbar>
      </AppBar>
    </Box>
    </>

    {/*----------END OF HEADER----------*/}

   {/*------ROUTING------*/}

    <Switch>
         <Route path ="/home" component={Home}/>  
          <Route path ="/Catalog" component={ProductCard}/>  
          <Route path ="/about" component={About}/> 
          <Route path ="/contact" component={Contact}/>   
          <Route path ="/cart" component={Cart}/>    
          <Route path ="/productpage" component={ProductPage}/>       
          <Route path ="/Register" component={Register}/>   
          <Route path ="/Address" component={Address}/> 
          <Route path ="/Login" component={Login}/>      
          <Route path = "/forgotPassword" component={ForgotPassword}/>
    </Switch>
    
    </Router>
    
  );
}