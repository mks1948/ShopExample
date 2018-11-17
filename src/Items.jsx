
import React, { Component } from 'react';
import { fbase } from './fbase';


class Items extends Component {

  render() {
    
    return (
    
      
          <div className="box a">  {this.props.item.name}</div>
        

      
   
    );
  }
}

export default Items;
