class NegociacoesView {
  //Recebe array de Negociacoes e retorna uma lista de elementos <tr>
  static row(dadosNegociacao) {
    let tr = $("<tr>").addClass("linhaNegociacao");
    let dados = dadosNegociacao.getNegociacao();
    dados.map(item => {
      tr.append($("<td>").text(item));
    });
    return tr;
  }
  //Recebe um array de elementos row e coloca na view
  static table(listaNegociacoes) {
    return listaNegociacoes.map(dadosNegociaca => {
      return this.row(dadosNegociaca);
    });
  }
  static refresh(listaNegociacoes, total) {
    let table = this.table(listaNegociacoes);
    this.limparLista();
    $("#tabelaNegociacoes").append(table);
    $("#footer").text(total);
  }
  static limparLista() {
    $(".linhaNegociacao").remove();
  }
}
