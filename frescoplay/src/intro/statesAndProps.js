//three ways to work with data
//props
//states
//context
import React from 'react';
import Header from './header';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        //state is null by default
        this.state = { title:"Welcome" };
    }
    render() { 

        setTimeout(()=>{
            this.setState({title:"Welcome Bob"});
        },2000)
        return (
        <div>
            <Header title={this.state.title}/>
        </div>
            );
    }
}
 
export default Layout;