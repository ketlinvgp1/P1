import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule],
  selector: 'app-maisvendido',
  styleUrl: './destaque.css',
  templateUrl: './destaque.html',
})
export class Destaque {

  maisVendidos: Produto[] = [

    {
      codigo: 1,
      nome: "São Luís – MA",
      descritivo: "Travessia dos Lençóis Maranhenses",
      detalhes: "Explore os Lençóis Maranhenses em uma experiência cercada por dunas, lagoas naturais e belas paisagens.",
      quantidade: 10,
      valor: 1899.90,
      promo: 1699.90,
      destaque: 1
    },

    {
      codigo: 4,
      nome: "Rio de Janeiro – RJ",
      descritivo: "Cristo Redentor e praias do Rio de Janeiro",
      detalhes: "Conheça alguns dos principais cartões-postais do Rio de Janeiro.",
      quantidade: 10,
      valor: 1499.90,
      promo: 1299.90,
      destaque: 1
    },

    {
      codigo: 7,
      nome: "Bonito – MS",
      descritivo: "Flutuação em rios de águas cristalinas",
      detalhes: "Conheça as águas cristalinas de Bonito e aproveite atividades em meio à natureza.",
      quantidade: 10,
      valor: 1699.90,
      promo: 1499.90,
      destaque: 1
    }

  ];

}
