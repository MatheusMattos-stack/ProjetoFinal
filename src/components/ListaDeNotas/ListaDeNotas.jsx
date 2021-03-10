import React, { Component } from "react";
import CardNotas from "../CardNotas/CardNotas";
import "./estilo.css";

class ListaDeNotas extends Component {
  deletarLista(){
    const indice = this.props.indice; 
    this.props.deletarLista(indice);
  }
  
  alterarNota() {
    const indice = this.props.indice;
    this.props.alterarNota(indice);
  }

render () {

    return (

        <ul className="lista-notas">
            {this.props.notas.map((nota, index) => {
                return (
                    <li className="lista-notas_item" key={index}>
                        <CardNotas
                        indice = {index}
                        deletarNota = {this.props.deletarNota}
                        alterarNota = {this.props.alterarNota}
                        novaNota = {nota}/>
                    </li>
                );
            })}
                <div id="botao-excluirTudo">
                    <input type="submit" name="botao-excluir-tudo" value="Limpar Lista" className="excluirLista" 
                    onClick={(this.deletarLista.bind(this))}
                    />
                </div>
        </ul>
    );
}
}

export default ListaDeNotas;  
