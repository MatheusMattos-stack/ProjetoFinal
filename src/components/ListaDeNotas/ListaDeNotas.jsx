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

  concluirNota() {
    const indice = this.props.indice;
    this.props.concluirNota(indice);
  }

render () {

    return (

        <ul className="lista-notas">
            {this.props.notas.map((nota, index) => {
                if (!nota.editar) {
                return (
                    <li className="lista-notas_item" key={index}>

                        <div
                            className={
                                nota.concluir ? 
                                "tarefa-concluir" :
                                "tarefa-concluir-nota"
                            }
                        >
                        <CardNotas
                        indice = {index}
                        deletarNota = {this.props.deletarNota}
                        alterarNota = {this.props.alterarNota}
                        concluirNota = {this.props.concluirNota}    
                        novaNota = {nota.texto}/>
                        </div>
                    </li>
                   );
                }
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
