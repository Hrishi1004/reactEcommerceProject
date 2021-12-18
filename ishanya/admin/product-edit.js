function Productedit(){
return(
        <div>
             <div className="admin-product-upload">
    <div className="product-upload-form">
        <form>
        <div className="p-idbox">
                <lable >Product id<span  className="p-id"></span></lable>
            </div>
            <div className="p-namebox">
                <input type="text" name="name" className="p-name" placeholder="Name"  onChange={this.changeHandler}/>
            </div>
            <div className="p-typebox">
                <input type="text" name="type" className="p-type" placeholder="Type"  onChange={this.changeHandler}/>
            </div>
         
           <div className="p-descbox">
               <textarea name="desc" placeholder="Description" className="p-desc"  onChange={this.changeHandler}></textarea>
           </div>
           <div className="p-imgbox">
               <div>Insert main image</div>
           <input type="file" onChange={ this.onChange1 }/>     
           </div> 
           <div>Insert sub images</div>
           <div className="p-imgbox">
           <input type="file" onChange={ this.onChange2 }/>     
           </div> 
           <div className="p-imgbox">
           <input type="file" onChange={ this.onChange3 }/>     
           </div>
           <div className="p-imgbox">
           <input type="file" onChange={ this.onChange4 }/>     
           </div>
           <div className="p-imgbox">
           <input type="file" onChange={ this.onChange5 }/>     
           </div>
            
          
            <div className="p-pricebox">
                <input type="number" name="price" placeholder="Price" className="p-price"  onChange={this.changeHandler}/>
            </div>   
            <div className="p-uploadbox">
                <input type="submit" name="p-upload" className="u-upload"/>
            </div>
        </form>
    </div>
</div>
</div>
       
    );

}

export default Productedit; 
