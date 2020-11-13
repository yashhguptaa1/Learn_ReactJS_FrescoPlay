import React from 'react';
import Header from './header';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        //state is null by default
        this.state = { title:"Welcome" };
    }

    changeTitle(title)
    {
        //this.setState({title:title})
        //SAME AS ABOVE CAUZ OF ES6
        this.setState({title})
    }

    //if you dont bind the function it will be considered as being called by Header component
    //by binding we ensure it is being called by Layout component
    render() { 
        return (
        <div>
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        </div>
            );
    }
}
 
export default Layout;