class ListaNegociacoes {
  constructor() {
    this.negociacoes = [];
  }
  adiciona(negociacao) {
    this.negociacoes.push(negociacao);
  }
  getNegociacoes() {
    return this.negociacoes;
  }
  getTotal() {
    if (this.negociacoes.length == 0) {
      return 0;
    } else {
      let total = 0;
      this.negociacoes.map(item => {
        total += item.volume;
      });
      return total;
    }
  }
}
