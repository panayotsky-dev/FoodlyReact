import React from 'react'
import { data } from './data.js';

data.forEach(element => {    
    Products(element)
    
});
function  Products (prop){
    console.log(prop)
    return (
       <>
    <div className='elements-container'>
        <div >text</div>
              
    
    </div>
    </> 
    
    )
  
}

export default Products