class NegociacaoController {
  constructor() {
    this.inputData = $("#data");
    this.inputQuantidade = $("#quantidade");
    this.inputValor = $("#valor");
    this.listaNegociacoes = new ListaNegociacoes();
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
  }
  limpaForm() {
    this.inputData.val("");
    this.inputQuantidade.val("");
    this.inputValor.val("");
    this.inputData.focus();
  }
}
