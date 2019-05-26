class ListaNegociacoes {
  constructor() {
    this.negociacoes = [];
  }
  adiciona(negociacoes) {
    this.negociacoes.push(negociacoes);
  }
  get negociacoes() {
    return this.negociacoes;
  }
}
