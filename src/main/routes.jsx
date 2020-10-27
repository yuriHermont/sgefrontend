import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import TelaEstoque from '../TelaEstoque/tela'
import ProdutoEdit from '../Produto/ProdutoEdit'

export default props => (
    <Router history={hashHistory}>
        <Route path='/TelaEstoque' component={TelaEstoque} />
        <Route path='/Produto' component={ProdutoEdit} />
        <Redirect from='*' to='/TelaEstoque' />
    </Router>
)