import React from 'react';


class App2 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "box">
                <div id = "tittle">{this.props.title}</div>
                <div id = "text">{this.props.children}</div>
            </div>
        );
    }
}

export default App;
