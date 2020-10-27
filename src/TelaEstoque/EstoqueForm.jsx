import React from "react";
import Grid from "../template/grid";
import IconButton from "../template/iconButton";

export default (props) => (
  <div role="form" className="EstoqueForm">
    <Grid cols="12 9 10">
      <input
        id="nomeProduto"
        className="form-control"
        placeholder="Nome Produto"
        onChange={props.handleChange}
        value={props.nomeProduto}
      ></input>
    </Grid>
    <Grid cols="12 3 2">
      <IconButton
        style="primary"
        icon="plus"
        onClick={props.handleAdd}
      ></IconButton>
    </Grid>
  </div>
);
