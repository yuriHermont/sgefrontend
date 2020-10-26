import React, { Component } from 'react'
import axios from 'axios'

import api from '../services/api'

import PageHeader from '../template/pageHeader'
import EstoqueForm from './EstoqueForm'
import EstoqueList from './EstoqueList'

const URL = 'https://localhost:5001/'


export default class tela extends Component {
    constructor(props){
        super(props)
        this.state = { nomeProduto: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.refresh();
    }
    handleChange(e) {
        this.setState({...this.state, nomeProduto: e.target.value })
    }

    refresh(){
        axios.get(`${URL}api/Produto/ListarProdutos`)
             .then(resp=>this.setState({...this.state, nomeProduto: '', list: resp.data }))
    }

    handleAdd(){

        console.log(this)

        const data = {
            NomeProduto: this.state.nomeProduto
        }
        axios.post(`${URL}api/Produto/CadastrarProduto`, { data })
            .then(resp => this.refresh())
    }
    
    render(){
        return (
            <div>
                <PageHeader name='Produtos' small='Cadastro'></PageHeader>
                <EstoqueForm 
                nomeProduto = {this.state.nomeProduto}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd} />
                <EstoqueList list={this.state.list} />
            </div>
        )
    }
}