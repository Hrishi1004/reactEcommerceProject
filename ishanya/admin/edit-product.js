import React from 'react'
import Viewadmin from './viewadmin';
import axios from 'axios';
class EditProduct extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             p:this.props.history,
             search:''
        };
    }
    
    componentDidMount()
    {
        console.log(this.state.searchField)
        axios.post('http://localhost/php/view.php')
        .then(response=>{
            //console.log(response.data.name);
            
            this.setState({posts:response.data});
            console.log(this.state.product);
           
        })
        .catch(error=>{
            console.log(error);
        })

    }
    onchange = (e) =>{
        this.setState({search:e.target.value})
    }
    
    userList = () =>{
        const obj ={
            name:this.props.history
            }
            const filteredproduct = this.state.posts.filter(prod =>{
                return prod.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
      return filteredproduct.map(function(object,i,props){
          return <Viewadmin obj={object} key={i} pro1={obj}></Viewadmin>

      })
      
    }

render(){
    
    return(
        <>
             

<p style={{marginLeft:30}}>EDIT VIEW</p>  
<div style={{width: 180,height:34,padding: '2px 4px',margin:10,color:'blue',display:'flex', alignItems: 'center',border:'.4px solid black'}} >
                  <InputBase
                   style={{width:150,paddingLeft:5,fontSize:14}}
                   placeholder="Search..."
                   inputProps={{ 'aria-label': 'Search...' }}
                   onChange={this.onchange}
                  />
                    <IconButton style={{margin:11,padding:5}} type="submit"  aria-label="search">
                     <SearchIcon />
                    </IconButton>
                </div>

<div style={{margin:20, display:'flex',flexWrap:'wrap'}}>
       {this.userList()}
    </div>
    
    
    </>
        )
    }
}
export default EditProduct;