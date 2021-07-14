import React from 'react';


class App extends React.Component{
    render(){
        return (
            <div>
            <p>
                Meu primeiro paragráfo
            </p>
            <p>
                Meu Segundo paragráfo
            </p>
            <p>
                {new Date().toLocaleDateString('pt-BR')}
            </p>
            </div>
        );
    }
}

export default App;



