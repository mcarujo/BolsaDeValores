class Negociacao {
  data;
  quantidade;
  valor;
  volume;
  constructor(data, quantidade, valor) {
    this.data = data;
    this.quantidade = quantidade;
    this.valor = valor;
    this.volume = valor * quantidade;
    Object.freeze(this); // Congelando e deixando tudo privado hahaha
  }
  obtemVolume() {
    return this.volume;
  }
  get data() {
    return new Data(this.data.getTime());
  }
  get quantidade() {
    return this.quantidade;
  }
  get valor() {
    return this.valor;
  }
  get valor() {
    return this.volume;
  }
  getStringData() {
    let diaMesAno = `${this.data.getDate()}/${this.data.getMonth() +
      1}/${this.data.getFullYear()}`;
    return diaMesAno;
  }
  getNegociacao() {
    return [this.getStringData(), this.quantidade, this.valor, this.volume];
  }
}
