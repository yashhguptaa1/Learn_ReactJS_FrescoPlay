import React from 'react';

class Header extends React.Component {

    handleChange(e){
        const ipTitle=e.target.value;
        this.props.changeTitle(ipTitle);
    }

    render() { 
        console.log(this.props);
        return ( 
            <div>
                yg {this.props.title}
                <input onChange={this.handleChange.bind(this)}/>
            </div>
         );
    }
}
 
export default Header;