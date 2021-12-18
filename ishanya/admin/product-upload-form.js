import axios from 'axios';
import React, { Component } from 'react'
import Button from '@mui/material/Button';

export class ProductUpload extends Component {
    UPLOAD_ENDPOINT = 'http://localhost/php/upload.php';
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',type:'',brand:'',desc:'',img:'',color:'',price:'',file:null,file1:null,file2:null,file3:null,file4:null
        }
        this.userUpdate = this.userUpdate.bind(this)
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
        this.onChange3 = this.onChange3.bind(this)
        this.onChange4 = this.onChange4.bind(this)
        this.onChange5 = this.onChange5.bind(this)
        this.uploadFile = this.uploadFile.bind(this)
    }
    changeHandler = (e) =>{
    this.setState({ [e.target.name] :e.target.value})
}

/*
    changeName = (e)=>{
        this.setState({
            name:e.target.value
        })
    }
    changeType = (e)=>{
        this.setState({
            type:e.target.value
        })
    }
    changeBrand = (e)=>{
        this.setState({
            brand:e.target.value
        })
    }
    changeDesc = (e)=>{
        this.setState({
            desc:e.target.value
        })
    }
    changeImg = (e)=>{
        this.setState({
            img:e.target.value
        })
    }
    changeColor = (e)=>{
        this.setState({
            color:e.target.value
        })
    }
    changePrice = (e)=>{
        this.setState({
            price:e.target.value
        })
    }
    */
    onChange1(e) {
        this.setState({file:e.target.files[0]})
        
    }
    onChange2(e) {
        this.setState({file1:e.target.files[0]})
        
    }
    onChange3(e) {
        this.setState({file2:e.target.files[0]}) 
    }
    onChange4(e) {
        this.setState({file3:e.target.files[0]})
        
    }
    onChange5(e) {
        this.setState({file4:e.target.files[0]}) 
    }


    async uploadFile(file){
        

        const formData = new FormData();
        
        formData.append('avatar',file)
        
        return  await axios.post(this.UPLOAD_ENDPOINT, formData,{
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
      }
  async  userUpdate(e)   {


    //console.log(this.state.file.name);
    e.preventDefault() 
    console.log(this.state.file);
    console.log(this.state.file1);
    console.log(this.state.file2);
    let res = await this.uploadFile(this.state.file);
    let res1=await this.uploadFile(this.state.file1);
    let res2=await this.uploadFile(this.state.file2);
    let res3=await this.uploadFile(this.state.file3);
    let res4=await this.uploadFile(this.state.file4);

    console.log(res1.data.uname);
    console.log(res2.data.uname);
    const obj={
            name:this.state.name,
            type:this.state.type,
            brand:this.state.brand,
            desc:this.state.desc,
            img1:res.data.uname,
            img2:res1.data.uname,
            img3:res2.data.uname,
            img4:res3.data.uname,
            img5:res4.data.uname,
            color:this.state.color,
            price:this.state.price

        }
       
        axios.post("http://localhost/php/app1.php",obj)
        .then(response=>{
            alert("Product uploaded successfully");
        })
        .catch(error=>{
            console.log(error);
        })
    }
    

    render() {
        const{name,type,brand,desc,img,color,price,file}=this.state
        return (
            <div className="boxStyle2 " >                  
             
             <h2 className="h2Style">Upload Product</h2>

            <hr ></hr>
            <form style={{width:'fir-content'}}>                
               <input   
               className="inputStyleMedium"
                type="text" name="name"  
                placeholder="Name"
                value={name} 
                onChange={this.changeHandler}/>
                               
                <input   
                 className="inputStyleMedium"
                 type="text" 
                 name="type"
                 placeholder="Type"
                 value={type} 
                 onChange={this.changeHandler}/>                 
                
              
               <input
               className="inputStyleMedium"
               type="number" 
               name="price" 
               placeholder="Price"
               value={price}
               onChange={this.changeHandler}/>
                                       
               
                <textarea 
                className="textAreaStyleLarge"
                name="desc" 
                placeholder="Description" 
                value={desc} 
                onChange={this.changeHandler}></textarea>
                
               
              <p>Upload image (1st image is the main image)</p>
                <input  
                className="inputStyleMedium"
                type="file" 
                onChange={ this.onChange1 }/> 
                <br/>
                 
          
               <input 
                className="inputStyleMedium"
                type="file" 
                onChange={ this.onChange2 }/>  
               
    
               <input
                className="inputStyleMedium"
               type="file" 
               onChange={ this.onChange3 }/>     
              
               
               <input  
               className="inputStyleMedium"
               type="file" 
               onChange={ this.onChange4 }/>  
                
               
               <input 
                className="inputStyleMedium"
               type="file"               
               onChange={ this.onChange5 }/>     
                <br/>
              
               <Button  name="p-upload" variant="contained" size="small" style={{ margin:8,backgroundColor:'blue',color:'white'}} onClick={this.userUpdate}>
                Link
               </Button>             
            </form>       
    
            </div>
        )
    }
}

export default ProductUpload;
