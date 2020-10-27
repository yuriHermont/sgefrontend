import React, { Component } from "react";
import axios from "axios";
//import {​ BrowserRouter as Link  from 'router-dom'
//import  Link ​ from 'react-router-dom'

import api from "../services/api";

import PageHeader from "../template/pageHeader";
import EstoqueForm from "./EstoqueForm";
import EstoqueList from "./EstoqueList";

const URL = "https://localhost:5001/";
const URLFront = "http://localhost:8080/#/";

export default class tela extends Component {
  constructor(props) {
    super(props);
    this.state = { nomeProduto: "", list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

    this.refresh();
  }
  handleChange(e) {
    this.setState({ ...this.state, nomeProduto: e.target.value });
  }

  refresh() {
    axios
      .get(`${URL}Api/Produto/ListarProdutos`)
      .then((resp) =>
        this.setState({ ...this.state, nomeProduto: "", list: resp.data })
      );
  }

  handleAdd() {
    axios
      .get(`${URL}Api/Produto/CadastrarProduto`, {
        params: {
          NomeProduto: this.state.nomeProduto
        },
      })
      .then((resp) => this.refresh())
      .catch((error) => {
        this.refresh();
      });
  }

  handleRemove(produto) {
    axios
      .delete(`${URL}Api/Produto/DeletarProduto?Id=${produto}`)
      .then((resp) => this.refresh())
      .catch((error) => {
        this.refresh();
      });
  }

  handleEdit(produto){
    <a href='#/Produto'>Tela Produto</a> 
  }

  render() {
    return (
      <div>
        <PageHeader name="Produtos" small="Cadastro"></PageHeader>
        <EstoqueForm
          nomeProduto={this.state.nomeProduto}
          handleChange={this.handleChange}
          handleAdd={this.handleAdd}
        />
        <EstoqueList 
          list={this.state.list} 
          handleRemove={this.handleRemove} 
          handleEdit={this.handleEdit}/>
      </div>
    );
  }
}
