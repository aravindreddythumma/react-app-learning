import React, { Component } from 'react';

class Welcome extends Component{
  render(){
    return(
     <h1>
Welcome{this.props.name} arguments.k.a {this.props.heroNames}
     </h1> 
    ) 
  }
}

export default Welcome;  