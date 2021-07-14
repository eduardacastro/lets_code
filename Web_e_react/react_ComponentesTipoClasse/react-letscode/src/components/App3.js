import React from 'react';

class App3 extends React.Component{
  constructor(props){
    super(props);
    this.state = { nome : '' , idade: 22}
  }
  changeNome = (evento) => {
    this.setState({ nome : evento.target.value});
  }
  render(){
    return(
      <>
        nome: <input type='text' value={this.state.nome} onChange={this.changeNome}/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
