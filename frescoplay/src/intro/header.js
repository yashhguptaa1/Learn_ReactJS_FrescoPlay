import React from 'react';

class Header extends React.Component {
    render() { 
        console.log(this.props);
        return ( 
            <div>
                yg {this.props.title}
            </div>
         );
    }
}
 
export default Header;