import React, { Component, Fragment } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      notas:[],
      editText: "",
      editIndex: -1,
      concluir: false,
    }
  }

criarNota (nota) {
    const editIndex = this.state.editIndex;

    if (editIndex === -1) {
      const novoArrayNotas = [...this.state.notas, {texto : nota, concluir: false}]
      const novoEstado = { notas: novoArrayNotas }
      this.setState(novoEstado)
    }
    else { 
        const tarefaConcluir = this.state.notas[editIndex]; 
        const novoConcluir = [].concat(
          
        this.state.notas.slice(0, editIndex),
        {texto: nota, concluir: tarefaConcluir.concluir},
        this.state.notas.slice(editIndex + 1)
      );  

      this.setState({ notas: novoConcluir });

      this.setState({ editText: '', editIndex: -1 });
    }

  }

deletarNota(index){
  let arrayNotas = this.state.notas; 
  arrayNotas.splice(index,1); 
  this.setState({notas:arrayNotas})
}

deletarLista(index){
  let arrayLista = this.state.notas; 
  arrayLista.splice(index); 
  this.setState({notas:arrayLista})
}

alterarNota (indice) {
  const nota = this.state.notas[indice];
  this.setState({editIndex: indice})
  this.setState({editText: nota.texto})
}

concluirNota (index) {
  let concluirOriginal = this.state.notas[index]; 
  const NovaNota = [].concat(
    this.state.notas.slice(0, index),
    {texto: concluirOriginal.texto, concluir: !concluirOriginal.concluir},
    this.state.notas.slice(index + 1)
  ); 
  this.setState({notas:NovaNota}); 
}  


render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
        criarNota={this.criarNota.bind(this)}
        editText={this.state.editText}        
        />

        <ListaDeNotas 
        deletarLista={this.deletarLista.bind(this)}
        alterarNota={this.alterarNota.bind(this)}
        deletarNota={this.deletarNota.bind(this)}
        concluirNota={this.concluirNota.bind(this)}
        notas={this.state.notas}/>
        
      </section>
    );
  }
}

//new ListaDeNotas({notas:this.notas})
export default App;


