import React from 'react'

export default props =>(
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i> SGEApp
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                    <li><a href='#/TelaEstoque'>Tela Estoque</a></li>
                    <li><a href='#/Produto'>Tela Produto</a></li>
                </ul>
            </div>
        </div>
    </nav>
)