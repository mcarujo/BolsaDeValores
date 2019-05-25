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
}
