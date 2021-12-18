import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import EditIcon from '@material-ui/icons/Edit';
import ProductUpload from './product-upload-form'
import EditProduct from './edit-product'
import Edit from './edit'

function Dashboard(){
    return(
        <>
        <div style={{padding:3,color:'gostWhite',boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset'}}>            
         <p style={{fontSize:15,paddingLeft:20}}> Dashboard </p>
       </div>

        <Router>
        <div className="Admindashboard">                  
         <Button variant="outlined" color="primary" startIcon={< AddTwoToneIcon />}>
            <Link style={{textDecoration:'none',color:'black'}} to ='/upload'>Add Product</Link>
         </Button>
         <Button variant="outlined" color="primary" startIcon={< EditIcon />}>
           <Link style={{textDecoration:'none',color:'black'}} to ='/editp'>Edit product</Link>
         </Button>
        </div>        

        <hr></hr>
        
        <Route path ='/upload' component={ProductUpload}/>
        <Route path='/editp' component={EditProduct}/>
        <Route path ='/edit' component={Edit}/>
        </Router>
        </>
    );
}export default Dashboard;