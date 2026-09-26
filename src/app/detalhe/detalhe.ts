import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})

export class Detalhe {

  // Produto que será exibido na página
  obj: Produto = new Produto();

  // Mensagem de erro
  mensagem: string = "";

  // Preço da viagem de acordo com o local escolhido
  valorPartida = 0;


  // Carrega o produto salvo no localStorage
  ngOnInit() {

    let json = localStorage.getItem("produto");

    if (json == null) {

      this.mensagem = "Produto Invalido, verifique!";

    } else {

      this.mensagem = "";

      this.obj = JSON.parse(json);

    }

  }


  // Define o preço de acordo com o local de partida
  alterarPartida(event: any) {

    if (event.target.value == "sao-paulo") {

      this.valorPartida = 500;

    }

    if (event.target.value == "rio-de-janeiro") {

      this.valorPartida = 600;

    }

  }


  // Adiciona o produto à cesta
  adicionarCesta(produto: Produto): void {

    // Recupera a cesta do localStorage
    let dados = localStorage.getItem('cesta');

    let cesta: any[] = [];

    // Verifica se a cesta já existe
    if (dados != null) {

      cesta = JSON.parse(dados);

    }

    let encontrado = false;

    // Verifica se o produto já está na cesta
    for (let item of cesta) {

      if (item.codigo == produto.codigo) {

        item.qtdCesta = item.qtdCesta + 1;

        item.valorTotal =
          item.precoUnitario * item.qtdCesta;

        encontrado = true;

      }

    }

    // Se o produto ainda não estiver na cesta
    if (encontrado == false) {

      let preco = produto.promo > 0
        ? produto.promo
        : produto.valor;

      let item = {

        ...produto,

        qtdCesta: 1,

        precoUnitario: preco,

        valorTotal: preco

      };

      cesta.push(item);

    }

    // Salva a cesta
    localStorage.setItem(
      'cesta',
      JSON.stringify(cesta)
    );

    alert('Produto adicionado à cesta!');

  }

}