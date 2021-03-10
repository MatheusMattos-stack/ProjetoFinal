import React, { Component } from "react";
import "./estilo.css";
import deleteSVG from "../../assets/img/delete.svg"
import editarSVG from "../../assets/img/editar.svg"
import concluirSVG from "../../assets/img/concluir.svg"

class CardNotas extends Component {

  apagar(){
    const indice = this.props.indice; 
    this.props.deletarNota(indice);
  }

  alterar(){
    const indice = this.props.indice;
    this.props.alterarNota(indice);

  }

  render() {
    return (

    <section className="card-tarefa">
      <p className="card-tarefa-texto"> {this.props.novaNota} </p>

      <section className="card-botoes-acao"> 

          <img src= {concluirSVG} className="card-tarefa-botao-concluir" onClick={()=>console.log("concluir")}/>

          <img src= {editarSVG} className="card-tarefa-botao-editar" onClick={this.alterar.bind(this)}/>

          <img src= {deleteSVG} className="card-tarefa-botao-excluir" onClick={this.apagar.bind(this)}/>
          
      </section>
  </section>

    );
  }
}

export default CardNotas;

