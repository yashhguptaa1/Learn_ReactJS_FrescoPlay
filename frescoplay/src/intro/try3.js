import React from 'react';

class App extends React.Component {

  //code goes here

  constructor(props){
    super(props);

    this.state={count:0};
  }

  handleClick()
  {
    var currVal=this.state.count;
    currVal=currVal+1;
    this.setState({count:currVal});
  }

  render(){
    return(
      <div>
              <button onClick={this.handleClick.bind(this)}>BUTTON</button>
              <h6>{this.state.count}</h6>
      </div>
    )
  }

}

export default App;
