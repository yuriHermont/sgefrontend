import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import TelaEstoque from '../TelaEstoque/tela'
import ProdutoEdit from '../TelaEstoque/tela'

export default props => (
    <Router history={hashHistory}>
        <Route path='/TelaEstoque' component={TelaEstoque} />
        <Route path='/PesquisarProduto' component={ProdutoEdit} />
        <Redirect from='*' to='/TelaEstoque' />
    </Router>
)