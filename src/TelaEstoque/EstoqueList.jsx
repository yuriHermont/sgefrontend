import React from "react";
import IconButton from "../template/iconButton";

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((produto) => (
      <tr key={produto.id}>
        <td>{produto.nomeProduto}</td>
        <td>{produto.qtdeProduto}</td>
        <td>{produto.valorUnitario}</td>
        <td>
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(produto.id)}
          ></IconButton>
          
          {/* <a href='#/Produto'>*/}
          <IconButton 
            style="warning"
            icon="edit"

          ></IconButton>
          
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Qtde </th>
          <th>Valor </th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
