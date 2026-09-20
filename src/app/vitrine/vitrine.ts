import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  imports: [RouterLink, CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})

export class Vitrine {

  lista: Produto[] = [

    {
      codigo: 1,
      nome: "São Luís – MA",
      descritivo: "Travessia dos Lençóis Maranhenses",
      quantidade: 10,
      valor: 1899.90,
      promo: 1699.90,
      destaque: 1
    },

    {
      codigo: 2,
      nome: "Manaus – AM",
      descritivo: "Encontro das Águas",
      quantidade: 10,
      valor: 1599.90,
      promo: 1399.90,
      destaque: 1
    },

    {
      codigo: 3,
      nome: "Recife – PE",
      descritivo: "Praia de Boa Viagem",
      quantidade: 10,
      valor: 1299.90,
      promo: 1199.90,
      destaque: 0
    },

    {
      codigo: 4,
      nome: "Rio de Janeiro – RJ",
      descritivo: "Cristo Redentor e praias do Rio de Janeiro",
      quantidade: 10,
      valor: 1499.90,
      promo: 1299.90,
      destaque: 1
    },

    {
      codigo: 5,
      nome: "Foz do Iguaçu – PR",
      descritivo: "Visita às Cataratas do Iguaçu",
      quantidade: 10,
      valor: 1399.90,
      promo: 1199.90,
      destaque: 1
    },

    {
      codigo: 6,
      nome: "Jalapão – TO",
      descritivo: "Fervedouros, dunas e paisagens do Jalapão",
      quantidade: 10,
      valor: 1799.90,
      promo: 1599.90,
      destaque: 0
    },

    {
      codigo: 7,
      nome: "Bonito – MS",
      descritivo: "Flutuação em rios de águas cristalinas",
      quantidade: 10,
      valor: 1699.90,
      promo: 1499.90,
      destaque: 1
    },

    {
      codigo: 8,
      nome: "Ouro Preto – MG",
      descritivo: "Centro histórico e arquitetura colonial",
      quantidade: 10,
      valor: 999.90,
      promo: 899.90,
      destaque: 0
    },

    {
      codigo: 9,
      nome: "Natal – RN",
      descritivo: "Praias, dunas e passeio de buggy",
      quantidade: 10,
      valor: 1399.90,
      promo: 1199.90,
      destaque: 1
    },

    {
      codigo: 10,
      nome: "Ilhabela – SP",
      descritivo: "Mergulho e praias paradisíacas",
      quantidade: 10,
      valor: 1199.90,
      promo: 999.90,
      destaque: 0
    }

  ];


  comprar(produto: Produto): void {

    let dados = localStorage.getItem('cesta');

    let cesta: any[] = [];

    if (dados != null) {
      cesta = JSON.parse(dados);
    }


    // Procura se o produto já está na cesta
    let item = cesta.find(
      p => p.codigo === produto.codigo
    );


    // Se já estiver na cesta
    if (item) {

      item.qtdCesta++;

      item.valorTotal =
        item.precoUnitario * item.qtdCesta;

    }

    // Se ainda não estiver na cesta
    else {

      let preco = produto.promo > 0
        ? produto.promo
        : produto.valor;


      cesta.push({

        ...produto,

        qtdCesta: 1,

        precoUnitario: preco,

        valorTotal: preco

      });

    }


    // Salva a cesta
    localStorage.setItem(
      'cesta',
      JSON.stringify(cesta)
    );
     alert('Item adicionado à cesta!');

  }

}