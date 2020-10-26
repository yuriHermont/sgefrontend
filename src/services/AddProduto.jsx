import api from '../api';

async function AddProduto(produto){
    const data = {
        Produto: produto
    };
    var response= {};
    response = await api.post(`${api}/Produto/CriarProduto`,
    data
    ).then(response => response.data).catch(error => {
        if (error.response && error.response.status === 400) {
            var mensagem = error.response.data.map(item => item.errorMessage).join('\n')
            return {
                data: {
                    sucesso: false,
                    mensagem
                }
            }
        } else {
            return {
                data: {
                    sucesso: false,
                    mensagem: error.response.data.mensagem,
                }
            };
        }
    });
    return response;
}

export{AddProduto};