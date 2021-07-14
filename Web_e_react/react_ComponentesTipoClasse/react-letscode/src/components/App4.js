import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : undefined, txtNome:''};
  }
  changetxtNome = (evt) => {
    this.setState({ nome : evt.target.value});
  }
  render(){
    if(!this.state.nome){
        return (
            <>
            Nome: <input type='text' value={this.state.nome} onChange={this.changetxtNome}/>
            <button>Salvar</button>
            </>
        );
    } else {
        return(
            <>
              <p>Olá {this.state.nome}</p>
            </>
          );
    }
  }
}

export default App3;