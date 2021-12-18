import React from 'react';
import '../inputStyle.css'
import '../textStyle.css'
import '../responsive.css'

class AdminLogin extends React.Component {  
  render() {
    return (  
    <div>     
          <div className="boxStyle">
            <h2 className="h2Style">
             Admin Login    
            </h2>
            <hr ></hr>
           
            <input   
            className="inputStyleMedium"           
             type="text" 
             placeholder="Admin id" 
            />
            <br/>  

            <input 
             className="inputStyleMedium "     
             type="password" 
             placeholder="Password" 
            /> 
             <br/>

            <button style={{width:80,padding:6, margin:8,border:'.5px solid gray',fontSize:14,color:'white',border:'hidden',backgroundColor:'blue'}}>
               Login
            </button> 
                       
          </div>        
        </div>
      );
    }
  }export default AdminLogin;