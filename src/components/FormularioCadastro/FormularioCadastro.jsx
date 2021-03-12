import React, { Component } from "react";
import estilo from "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props){
    super(props);
    this.state = {
      original: "",
      texto: "",
      editText: "",
    };
  }
  
  componentDidUpdate(prevState) {

    if (this.props.editText !== '' && this.state.original === '') {
      this.setState({ original: this.props.editText });
    }

    if (prevState.editText !== this.props.editText) {
      this.setState({ editText: this.props.editText });
    }
  }

  _handleMudancaDeNota(evento) {
      evento.stopPropagation();
      this.setState({texto: evento.target.value});
      this.setState({ editText: evento.target.value });
  }

  _criarNota (evento) {
      evento.preventDefault();
      evento.stopPropagation();
      this.props.criarNota(this.state.texto);
      this.setState({ texto: '' });
      this.setState({ editText: '' });
      this.setState({ original: '' });
  }


  render () {
    return (
      <form 
      className="form-cadastro"
      onSubmit={this._criarNota.bind(this)}>

      <h2 className="formulario-titulo">To-Do List</h2>

      {
        this.state.original !== '' && (
          <p className="formulario-texto"> Edição :  “{this.state.original}”</p>
        )
      }

      {
        this.state.editText ? (
          <input 
            className="formulario-editar" 
            type="text"
            value={this.state.editText}
            onChange={this._handleMudancaDeNota.bind(this)}
          />
        ) : (
          <input 
            className="formulario-criar" 
            type="text"
            value={this.state.texto}
            onChange={this._handleMudancaDeNota.bind(this)}
            placeholder="Digite sua próxima tarefa..."
          />
        )
      }

      <button
        className="formulario-botao"
        type="submit">{ this.state.original ? 'Editar' : 'Adicionar' }</button>
      </form>
    );
  }
}


export default FormularioCadastro;


