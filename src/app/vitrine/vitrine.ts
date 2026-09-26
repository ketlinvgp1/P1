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
    detalhes: "Explore os Lençóis Maranhenses em uma experiência cercada por dunas, lagoas naturais e belas paisagens. Um destino ideal para quem busca aventura, natureza e cenários inesquecíveis.",
    quantidade: 10,
    valor: 1899.90,
    promo: 1699.90,
    destaque: 1
  },

  {
    codigo: 2,
    nome: "Manaus – AM",
    descritivo: "Encontro das Águas",
    detalhes: "Conheça Manaus e o famoso Encontro das Águas, onde os rios Negro e Solimões correm lado a lado. Aproveite também o contato com a natureza e as paisagens da região amazônica.",
    quantidade: 10,
    valor: 1599.90,
    promo: 1399.90,
    destaque: 1
  },

  {
    codigo: 3,
    nome: "Recife – PE",
    descritivo: "Praia de Boa Viagem",
    detalhes: "Descubra Recife e aproveite a famosa Praia de Boa Viagem, além das atrações históricas e culturais da cidade. Uma viagem que combina praias, cultura e belas paisagens.",
    quantidade: 10,
    valor: 1299.90,
    promo: 1199.90,
    destaque: 0
  },

  {
    codigo: 4,
    nome: "Rio de Janeiro – RJ",
    descritivo: "Cristo Redentor e praias do Rio de Janeiro",
    detalhes: "Conheça alguns dos principais cartões-postais do Rio de Janeiro, incluindo o Cristo Redentor e suas famosas praias. Aproveite as belas paisagens e os principais pontos turísticos da cidade.",
    quantidade: 10,
    valor: 1499.90,
    promo: 1299.90,
    destaque: 1
  },

  {
    codigo: 5,
    nome: "Foz do Iguaçu – PR",
    descritivo: "Visita às Cataratas do Iguaçu",
    detalhes: "Visite as impressionantes Cataratas do Iguaçu e aproveite trilhas e mirantes cercados pela natureza. Uma experiência para conhecer uma das paisagens naturais mais famosas do Brasil.",
    quantidade: 10,
    valor: 1399.90,
    promo: 1199.90,
    destaque: 1
  },

  {
    codigo: 6,
    nome: "Jalapão – TO",
    descritivo: "Fervedouros, dunas e paisagens do Jalapão",
    detalhes: "Explore as belezas naturais do Jalapão, conhecendo seus famosos fervedouros, dunas, cachoeiras e paisagens. Uma viagem perfeita para quem gosta de aventura e contato com a natureza.",
    quantidade: 10,
    valor: 1799.90,
    promo: 1599.90,
    destaque: 0
  },

  {
    codigo: 7,
    nome: "Bonito – MS",
    descritivo: "Flutuação em rios de águas cristalinas",
    detalhes: "Conheça as águas cristalinas de Bonito e aproveite atividades de flutuação em meio à natureza. O destino também oferece cachoeiras, rios e belas paisagens para quem busca aventura e tranquilidade.",
    quantidade: 10,
    valor: 1699.90,
    promo: 1499.90,
    destaque: 1
  },

  {
    codigo: 8,
    nome: "Ouro Preto – MG",
    descritivo: "Centro histórico e arquitetura colonial",
    detalhes: "Explore as ruas e construções históricas de Ouro Preto, conhecendo igrejas, museus e a tradicional arquitetura colonial. Um destino rico em história, cultura e patrimônio brasileiro.",
    quantidade: 10,
    valor: 999.90,
    promo: 899.90,
    destaque: 0
  },

  {
    codigo: 9,
    nome: "Natal – RN",
    descritivo: "Praias, dunas e passeio de buggy",
    detalhes: "Aproveite as belas praias de Natal, conheça suas famosas dunas e desfrute do tradicional passeio de buggy. Uma viagem com belas paisagens, diversão e contato com o litoral potiguar.",
    quantidade: 10,
    valor: 1399.90,
    promo: 1199.90,
    destaque: 1
  },

  {
    codigo: 10,
    nome: "Ilhabela – SP",
    descritivo: "Mergulho e praias paradisíacas",
    detalhes: "Conheça as praias paradisíacas de Ilhabela, com águas cristalinas, opções de mergulho e belas trilhas. Um destino perfeito para aproveitar a natureza, descansar e viver novas aventuras.",
    quantidade: 10,
    valor: 1199.90,
    promo: 999.90,
    destaque: 0
  }

];


  adicionarCesta(produto: Produto): void {

  // Recupera a cesta do localStorage
  let dados = localStorage.getItem('cesta');

  let cesta: any[] = [];

  // Verifica se a cesta já existe
  if (dados != null) {

    // Desserializa a cesta
    cesta = JSON.parse(dados);

  }

  let encontrado = false;

  // Verifica se o produto já está na cesta
  for (let item of cesta) {

    if (item.codigo == produto.codigo) {

      item.qtdCesta = item.qtdCesta + 1;

      item.valorTotal = item.precoUnitario * item.qtdCesta;

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

  // Serializa e grava a cesta
  localStorage.setItem(
    'cesta',
    JSON.stringify(cesta)
  );

  alert('Produto adicionado à cesta!');
}

  verDetalhe(obj:Produto){
    localStorage.setItem("produto", JSON.stringify(obj));  
    location.href = "detalhe";
  }

}