class NegociacaoController {
  constructor() {
    this.inputData = $("#data");
    this.inputQuantidade = $("#quantidade");
    this.inputValor = $("#valor");
    this.listaNegociacoes = new ListaNegociacoes();
    this.total = 0.0;
  }
  criaNegociacao() {
    return new Negociacao(
      new Date(this.inputData.val().split("-")),
      this.inputQuantidade.val(),
      this.inputValor.val()
    );
  }
  adiciona(event) {
    event.preventDefault();
    let negociacao = this.criaNegociacao();
    this.listaNegociacoes.adiciona(negociacao);
    let total = this.listaNegociacoes.getTotal();
    this.limpaForm();
    // let view = new NegociacoesView();
    NegociacoesView.refresh(this.listaNegociacoes.getNegociacoes(), total);
  }
  limpaForm() {
    this.inputData.val("");
    this.inputQuantidade.val("");
    this.inputValor.val("");
    this.inputData.focus();
  }
}
