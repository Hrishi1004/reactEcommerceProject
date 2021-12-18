import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';


import DeleteIcon from '@material-ui/icons/Delete';
import { Block } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';


export class viewadmin extends Component {
    constructor(props) {
        super(props)
    this.state={
        istrue1:false,
        arr:[]
    }
     //  this.ForView=this.ForView.bind(this);
    }
    
    delete = ()=>{
        const confirmBox = window.confirm("Do you really want to delete this Product?")
        const obj ={
            id:this.props.obj.Id
        }
        if(confirmBox===true)
        {
            axios.post("http://localhost/php/delete.php",obj)
            .then(response=>{
                window.location.reload(false);

                //console.log(response);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

    render() {
        const obj = 
        {
            state1:this.props.obj
        }
        return (
            <>
           <div style={{width:160,padding:5,margin:10,display:Block,textAlign:'left',boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'}} >
            <img 
              style={{width:160,height:130,}}
              src={this.props.obj.img1}/>    
            <p
             style={{width:160,height:35,overflow:'hidden',fontSize:13,marginBlockStart:0,marginBlockEnd:0}}>
             {this.props.obj.name}
            </p>
            <p
             style={{width:160,height:20,color:'grey',fontSize:12,marginBottom:5,overflow:'hidden',fontSize:13,marginBlockStart:0,marginBlockEnd:0}}>
             {this.props.obj.type}
           </p> 

          <p  style={{width:160,height:20,fontSize:13,marginBlockStart:0,marginBlockEnd:0}}>
             $ {this.props.obj.price}
           </p>   
           <div style={{textAlign:'center',marginTop:5,marginBottom:5}}>
           <ButtonGroup size="small" color="primary"  aria-label="outlined primary button group">
               
             <Button>
              <EditIcon  style={{color:'blue'}}  fontSize="small" onClick={()=>{
                        this.props.pro1.name.push('/edit',obj);} } />              
             </Button>   
             <Button >
               <DeleteIcon  style={{color:'blue'}}  fontSize="small" onClick={this.delete}/>
              </Button>   
            </ButtonGroup>
           </div>
         </div>                   
    
            </>
        )
    }
}

export default viewadmin
