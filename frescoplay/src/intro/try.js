import React from 'react';
import Header from './header';

class HouseFull extends React.Component {

    /*getVal(val)
    {
        if(val)
            return "Vacant";
        else
            return "HouseFull";
    }*/

    render() { 

        var list=[
            <Header title="Hello"/>,
            <Header title="Bonjour"/>,
            <Header title="Caio"/>,
        ];
        return (
            <ul>
                {list}
            </ul>
           
            /*
            <div>
                {this.getVal(this.props.val)}
            </div>*/
          );
    }
}
 
export default HouseFull;