import React from 'react';

const Greet = (props) =>{
  return(
    <div>
    <h1>
      Hello {props.name} My {props.role}
      </h1>
    {props.children}  
    </div>
    
  )
}
export default Greet;