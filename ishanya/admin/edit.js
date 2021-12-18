import axios from 'axios';
import React, { Component } from 'react'


export class edit extends Component {
    UPLOAD_ENDPOINT = 'http://localhost/php/upload.php';
    constructor(props) {
        super(props)
    let n= this.props.history.location.state.state1
        this.state = {
             name:n.name,type:n.type,brand:n.brand,desc:n.desc,color:n.color,price:n.price,file1:null,file2:null,file3:null,file4:null,file5:null,
             cfile1:n.img1,cfile2:n.img2,cfile3:n.img3,cfile4:n.img4,cfile5:n.img5,id:n.Id
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
        this.setState({file1:e.target.files[0]})
        
    }
    onChange2(e) {
        this.setState({file2:e.target.files[0]})
        
    }
    onChange3(e) {
        this.setState({file3:e.target.files[0]}) 
    }
    onChange4(e) {
        this.setState({file4:e.target.files[0]})
        
    }
    onChange5(e) {
        this.setState({file5:e.target.files[0]}) 
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
let res1,res2,res3,res4,res5,imgn1,imgn2,imgn3,imgn4,imgn5
console.log(this.state.id);
    //console.log(this.state.file.name)
    e.preventDefault() 
    console.log(this.state.file);
    console.log(this.state.file1);
    console.log(this.state.file2);
    if(this.state.file1!=null)
    {
     res1 = await this.uploadFile(this.state.file1);
     imgn1=res1.data.uname
    }
    else
{
     imgn1=this.state.cfile1
}
if(this.state.file2!=null)
{
 res2 = await this.uploadFile(this.state.file2);
 imgn2=res2.data.uname
}
else
{
 imgn2=this.state.cfile2
}
if(this.state.file3!=null)
{
 res3 = await this.uploadFile(this.state.file3);
 imgn3=res3.data.uname
}
else
{
 imgn3=this.state.cfile3
}
if(this.state.file4!=null)
{
 res4 = await this.uploadFile(this.state.file4);
 imgn4=res4.data.uname
}
else
{
 imgn4=this.state.cfile4
}
if(this.state.file5!=null)
{
 res5 = await this.uploadFile(this.state.file5);
 imgn5=res5.data.uname
}
else
{
 imgn5=this.state.cfile5
}
    if(this.state.file==null)
    {
        console.log('hi');
    }
    
    const obj={
            id:this.state.id,
            name:this.state.name,
            type:this.state.type,
            brand:this.state.brand,
            desc:this.state.desc,
            img1:imgn1,
            imag2:imgn2,
            img3:imgn3,
            img4:imgn4,
            img5:imgn5,
            color:this.state.color,
            price:this.state.price

        }
       
        axios.post("http://localhost/php/edit.php",obj)
        .then(response=>{
            //console.log(response);
        })
        .catch(error=>{
            console.log(error);
        })
    }
    

    render() {
        const{name,type,brand,desc,img,color,price,cfile1,cfile2,cfile3,cfile4,cfile5}=this.state
        return (
            <div>
                 <div style={{width:'500px',margin:'auto',marginTop:50,padding:20,boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset'}}>                  
             <h2 style={{marginBlockEnd:3,marginBlockStart:3,fontSize:20,fontWeight:500}} >Upload Product</h2>
            <hr ></hr>
            <form style={{width:'fir-content'}} onSubmit={this.userUpdate}>                
                <input   
                style={{width:200, padding:6, margin:8,border:'.5pxa solid gray',fontSize:14}} 
                type="text" name="name"  
                placeholder="Name"
                value={name} 
                onChange={this.changeHandler}/>
                               
                <input   
                style={{width:200, padding:6, margin:8,border:'.5px solid gray',fontSize:14}}
                 type="text" 
                 name="type"
                 placeholder="Type"
                 value={type} 
                 onChange={this.changeHandler}/>
                
               
               <input
               style={{width:200, padding:6, margin:8,border:'.5px solid gray',fontSize:14}}
               type="number" 
               name="price" 
               placeholder="Price"
               value={price}
               onChange={this.changeHandler}/>
                          
               
                <textarea 
                 style={{width:425, height:200,padding:8, margin:8,border:'.5px solid gray',fontSize:14}}
                name="desc" 
                placeholder="Description" 
                value={desc} 
                onChange={this.changeHandler}></textarea>
               
              <p>Upload image (1st image is the main image)</p>
                <input  
                style={{width:200, padding:6, margin:8,border:'.5px solid gray',fontSize:14}} 
                 type="file" 
                 onChange={ this.onChange1 }/> 
          
               <input 
                style={{width:200, padding:6, margin:8,border:'.5px solid gray',fontSize:14}} 
                type="file" 
                onChange={ this.onChange2 }/>     
    
               <input
                style={{width:200, padding:6, margin:8,border:'.5px solid gray',fontSize:14}} 
               type="file" 
               onChange={ this.onChange3 }/>     
              
               
               <input  style={{width:200, padding:6, margin:8,border:'.5px solid gray',fontSize:14}} 
               type="file" 
               onChange={ this.onChange4 }/>     
               
               <input 
                style={{width:200, padding:6, margin:8,border:'.5px solid gray',fontSize:14}} 
               type="file" 
              
               onChange={ this.onChange5 }/>     
               <br/> 
               <input type="submit" name="p-upload" className="u-upload" style={{ margin:8,backgroundColor:'blue',color:'white'}}/>            
            </form>
       
    
            </div>
            </div>
        )
    }
}

export default edit
