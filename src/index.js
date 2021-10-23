import React from "react";
import { render } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0,
    }
  }
  increaseCount(){
    this.setState({count:this.state.count + 1});
  }

  render (){
    
    return (
    <div style={styles}>
<h1> {this.state.count} </h1>
      
      <div>
      <button onClick ={this.increaseCount}>Increase </button>  
      </div>
      </div>
    
      
    )
  }
} 

let count = 0;

render(<App count={count} />, document.getElementById("root"));
