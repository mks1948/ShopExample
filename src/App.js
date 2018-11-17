import React, { Component } from 'react';
import { fbase } from './fbase';
import Items from './Items';

class App extends Component {
state={
  items:[],
  active:false,}
  componentDidMount() {
    this.ref = fbase.syncState('dane', {
        context: this,
        state: 'totalResult',
      })
      setTimeout(()=>{
        this.setState({
          active:true
        })
      },3000)
      this.getSales();
     
}
componentWillUnmount() {
    fbase.removeBinding(this.ref)
}
getSales(){
  fbase.fetch('totalResult', {
    context: this,
    asArray: true,
    then(data){
      this.setState({
        items:[this.state.items,data]
      })
    }
  });
}
  render() {
    let result;
    // console.log(this.state.totalResult)
    if(this.state.active){
      result = this.state.totalResult.map(item =>{
        return <Items key={item.id} item={item}/>
    })}
    return (
      <div className="App">
        <h4> Shop by Jakub </h4>
        <div className="wrapper">
        {result}
          </div>

      
      </div>
    );
  }
}

export default App;
