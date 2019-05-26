class NegociacoesView {
  //Recebe array de Negociacoes e retorna uma lista de elementos <tr>
  row(dadosNegociacao) {
    tr = $("<tr>");
    dadosNegociacao.map(item => {
      tr.append($("<td>").val(item));
    });
  }
  //Recebe um array de elementos row e coloca na view
  table(listaNegociacoes) {
    return listaNegociacoes.map(dadosNegociaca => {
      return this.row(dadosNegociaca);
    });
  }
}
