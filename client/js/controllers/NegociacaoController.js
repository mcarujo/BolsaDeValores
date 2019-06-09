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
  importaNegociacoes() {
    let rotas = [
      "negociacoes/semana",
      "negociacoes/anterior",
      "negociacoes/retrasada"
    ];
    rotas.map(rota => {
      $.ajax({
        type: "GET",
        url: rota,
        async: false
      })
        .done(results => {
          results.map(result => {
            this.listaNegociacoes.adiciona(
              new Negociacao(
                new Date(result.data),
                result.quantidade,
                result.valor
              )
            );
            let total = this.listaNegociacoes.getTotal();
            this.limpaForm();
            NegociacoesView.refresh(
              this.listaNegociacoes.getNegociacoes(),
              total
            );
          });
        })
        .fail(() => {
          alert("Não conseguimos importa os dados ! O servidor está rodando?");
        });
    });
  }
  limpaForm() {
    this.inputData.val("");
    this.inputQuantidade.val("");
    this.inputValor.val("");
    this.inputData.focus();
  }
  limpaLista() {
    this.listaNegociacoes.limpaLista();
    NegociacoesView.refresh(this.listaNegociacoes.getNegociacoes(), 0);
  }
}
