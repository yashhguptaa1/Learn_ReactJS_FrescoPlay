import React from 'react';

class Layout extends React.Component {

    //any constructor or function only to be defined here

    constructor()
    {
        super();//to be defined always as the first line
        this.middleName="Kumar";
    }
    getLastName(val){
        return "Gupta" +val;
    }
    render() { 

        //any variables define here
        const firstName="Sunit"
        return (
        <h1> Your name is {firstName} {this.middleName} {this.getLastName(2)} !</h1>
          );
    }
}
 
export default Layout;