import React from 'react'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(produto => (
            <tr >
                <td>{produto.description}</td>
                <td>
                    
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}