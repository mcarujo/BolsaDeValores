class ListaNegociacoes {
  constructor() {
    this.negociacoes = Array;
  }
  adiciona(negociacoes) {
    this.negociacoes.push(negociacoes);
  }
  getNegociacoes() {
    return this.negociacoes;
  }
}
